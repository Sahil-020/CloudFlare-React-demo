import React, { Component } from "react";
import QrReader from "react-qr-scanner";

class QRContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    console.log("data :", data);
    if (data) {
      this.setState({
        result: data.text,
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode="rear"
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRContainer;
