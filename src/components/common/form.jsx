import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { Button } from "@mui/material";
class Form extends Component {
  state = {
    data: {},
    errors: {},
    showSample: true,
  };
  validate = () => {
    // Form Validation
    const options = { abortEarly: false }; // options for Joi api
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null; // no errors
    console.log("error:" + error);
    const relevantErrors = {};
    for (let detail of error.details) {
      if (relevantErrors[detail.path[0]]) continue; // prioritize empty field over unmatched format
      relevantErrors[detail.path[0]] = detail.message; // add new error to relevant errors
    }
    console.log("relevant errors:" + relevantErrors);
    return relevantErrors;
  };
  validateProperty = ({ name, value }) => {
    // field validation for form
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] }; // new object for field
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleCreate = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.onSubmit();
  };

  onEdit = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleClickShowSample = () => {
    this.setState({
      ...this.state,
      showSample: !this.state.showSample,
    });
  };

  renderButton(label) {
    return (
      <Button
        type="submit"
        color="success"
        variant="contained"
        sx={{ mt: 2 }}
        // disabled={this.validate() && true}
      >
        {label}
      </Button>
    );
  }

  renderInput(name, label, type = "text", sample = null, autoFocus = false) {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        autoFocus={autoFocus}
        onEdit={this.onEdit}
        error={errors[name]}
        sample={sample}
        showSample={this.state.showSample}
        clickShowSample={this.handleClickShowSample}
        requireSample={sample && true}
      />
    );
  }
}

export default Form;
