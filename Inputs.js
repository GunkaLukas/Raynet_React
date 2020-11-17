import React, { Component } from "react";

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        const { name } = this.props;
        return (
            <label>
                <input type="text" name={name} value={this.state.value} onChange={this.handleChange} size="50" /> {name}
            </label>
        );
    }
}