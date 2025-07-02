import React, {Component} from 'react';
import './App.css';
import { FaRegLightbulb } from "react-icons/fa";



class toggl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: true,
      name: "",
    };
  }
  toggleTheme = () => {
    this.setState((state) => ({ theme: !state.theme }));
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { theme } = this.state;
    const { name } = this.state;
    const styles = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",

      padding: 30,
      backgroundColor: theme ? "#fff" : "#222",
      color: theme ? "#222" : "#fff",
    };

    const stylesBtn = {
      padding: "10px 30px",
      backgroundColor: "transparent",
      color: theme ? "#222" : "#fff",
      borderRadius: 8,
      border: `1px solid ${theme ? "#222" : "#fff"}`,
      cursor: "pointer",
    };

    const stylesDiv = {
      border: `1px solid ${theme ? "#222" : "#fff"}`,
      padding: 30,
      borderRadius: 8,
      gap: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };

    const stylesInp = {
      padding: "8px",
      fontSize: "16px",
      border: `1px solid ${theme ? "#222" : "#fff"}`,
      borderRadius: 8,
      backgroundColor: "transparent",
    };

    return (
      <div style={styles}>
        <div style={stylesDiv}>
          <input
            type="text"
            placeholder="Введи ім’я"
            value={name}
            onChange={this.handleChange}
            style={stylesInp}
          />

          
          <FaRegLightbulb size={64} color={theme ? "black" : "yellow"} />
          <h2 style={{ marginTop: "10px", fontSize: "18px" }}>Hello, {name}</h2>
          <button style={stylesBtn} onClick={this.toggleTheme}>
            Toggle Theme
          </button>
        </div>
      </div>
    );
  }
}

export default toggl;
