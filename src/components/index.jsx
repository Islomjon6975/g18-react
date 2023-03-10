import React, { Component } from "react";
import ExcellentMaterails from "./ExcellentMaterials";
import Header from "./Header";
import Hero from "./Hero";
import Testimoniol from "./Testimoniol";
import Users from "./Users";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Hero />
        <ExcellentMaterails />
        <Testimoniol /> */}
        <Users />
      </div>
    );
  }
}
