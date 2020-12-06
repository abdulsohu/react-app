import React, { Component } from "react";

class StatusChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.changeStatus(e.target.value);
  }

  render() {
    return (
      <div>
        <div
          className="field"
          style={{ paddingTop: "1.5em", paddingBottom: "1.5em" }}
        >
          <p className="control">
            <input className="input" 
            type="text" 
            placeholder="New Status" 
            value={this.state.value}
            onChange={this.handleChange}/>
          </p>
        </div>
      </div>
    );
  }
}

export default StatusChange;
