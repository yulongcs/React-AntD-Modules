import React, { Component } from "react";
import { DatePicker, Button, version } from "antd";
import moment from "moment";

class App extends Component {
  render() {
    return (
      <div className="app-module" style={{ margin: 24 }}>
        <p style={{ marginBottom: 24 }}>
          Current antd version: {version} <br />
          You can change antd version on the left panel (Dependencies section).
        </p>
        <DatePicker defaultValue={moment()} />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
