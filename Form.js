import React, { Component } from "react";
import Inputs from "./Inputs";
import './css.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "raynet.test@seznam.cz",
      api: "crm-8e74e56777db4e2d9240855e4c3af5b9",
      instance: "test1",
      request: "https://app.raynet.cz/api/v2/company/"
    };
    const handleChange = (name, value) => this.setState({ [name]: value });
    this.handleChangeUser = handleChange.bind(this, 'user');
    this.handleChangeApi = handleChange.bind(this, 'api');
    this.handleChangeInstance = handleChange.bind(this, 'instance');
    this.handleChangeRequest = handleChange.bind(this, 'request');
  }

  getTable() {
    var user = this.state.user;
    var api = this.state.api;
    var instance = this.state.instance;
    var request = this.state.request;
    var data = "user="+user+"&"+"api="+api+"&"+"instance="+instance+"&"+"request="+request;
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      document.getElementById("content").innerHTML = xhr.response;
    }
    xhr.open("post", "http://localhost/LukasGunka/raynet/src/Raynet/scriptTable.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }

  render() {
    return (
      <form className="Inputs">
        <Inputs name="UŽIVATEL" value={this.state.user} onChange={this.handleChangeUser} /><br></br>
        <Inputs name="API" value={this.state.api} onChange={this.handleChangeApi} /><br></br>
        <Inputs name="INSTANCE" value={this.state.instance} onChange={this.handleChangeInstance} /><br></br>
        <Inputs name="REQUEST" value={this.state.request} onChange={this.handleChangeRequest} /><br></br>
        <button type="button" onClick={() => {this.getTable()}}>Zobraz klienty</button><br></br>
        <div id="content"></div>
      </form>

    );
  }
}