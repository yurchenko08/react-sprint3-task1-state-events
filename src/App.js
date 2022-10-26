import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appData: "React Marathon" };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler = () =>
    this.setState({
      appData: this.state.appData.toLowerCase(),
    });
  render() {
    return <div onClick={this.onClickHandler}> {this.state.appData}</div>;
  }
}
