import React, { Component } from "react";
// import QrReader from "react-qr-scanner";
import QrReader from "modern-react-qr-reader";
// import QRScan from "qrscan";

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
          facingMode={"environment"}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }

//   constructor(props) {
//     super(props);
//     this.state = { value: "", watching: false };
//     this.onFind = this.onFind.bind(this);
//   }

//   onFind(value) {
//     this.setState({ value, watching: false });
//   }

//   render() {
//     return (
//       <>
//         <h1>QRScan Demo</h1>
//         {this.state.watching ? (
//           <QRScan onFind={this.onFind} />
//         ) : (
//           <>
//             <button onClick={() => this.setState({ watching: true })}>
//               Scan
//             </button>
//             <h4>value: {this.state.value}</h4>
//           </>
//         )}
//       </>
//     );
//   }
}

export default QRContainer;


