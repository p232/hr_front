import React, { Component } from "react";
import "./css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Комплексная система кадрового учета</h1>
          <p>Для продолжения работы необходимо <a href="./login">войти в систему</a></p>
        </div>
      </div>
    );
  }
}
