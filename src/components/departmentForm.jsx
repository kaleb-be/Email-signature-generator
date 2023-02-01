import React from "react";
import Joi from "joi-browser";
import Box from "@mui/material/Box";
import Form from "./common/form";
import {
  getDepartmentsSample,
  getemptyDepartments,
} from "../services/departmentService";

class DepartmentForm extends Form {
  state = {
    data: { ...this.props.departments },
    errors: { ...getemptyDepartments },
    showSample: { ...getDepartmentsSample },
  };

  schema = {
    name: Joi.string()
      .label("Department Name")
      .regex(/(?:[a-zA-Z\-.]) (?:[-a-zA-Z])/g, "Department Name")
      .required(),
    office: Joi.string()
      .label("Office")
      .regex(/([a-zA-Z]+ ?){1,7}/g, "Office")
      .required(),
    motto: Joi.string()
      .label("Department Motto")
      .regex(/([a-zA-Z]+ ?){1,7}/g, "Department Motto")
      .required(),
    telephone: Joi.string()
      .label("Telephone Number")
      .regex(/^(\+[0-9]{12})\b/g, "Telephone Number")
      .required(),
    email: Joi.string()
      .label("Department Email")
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@ohmswich.com/g,
        "Department Email"
      )
      .required(),
    // copied: Joi.label("Copied Signature"),
  };

  onSubmit = (e) => {
    // send data to preview component
    this.props.onConfirm(this.props.department, {
      ...this.state.data,
      // copied: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* TODO: work on a better heading. */}

        <Box sx={{ mt: 3, mx: 2 }}>
          <form onSubmit={this.handleCreate}>
            {/* ---------------------------------------------------------------- */}
            {/* DEPARTMENT NAME*/}
            {this.renderInput("name", "Department Name", "text", null, true)}
            {/* ---------------------------------------------------------------- */}
            {/* DEPARTMENT JOB TITLE*/}
            {this.renderInput("office", "Office")}
            {/* ---------------------------------------------------------------- */}
            {/* DEPARTMENT MOTTO  */}
            {this.renderInput("motto", "Motto")}
            {/* ---------------------------------------------------------------- */}
            {/* DEPARTMENT PHONE NUMBER*/}
            {this.renderInput(
              "telephone",
              "Department Phone-Number",
              "tel",
              "Remember to include your country code. Eg: +251912345678"
            )}
            {/* ---------------------------------------------------------------- */}
            {/* DEPARTMENT EMAIL*/}
            {this.renderInput(
              "email",
              "Ohmswich Email",
              "email",
              "Make sure to use your company email. Eg: johnsmith@ohmswich.com"
            )}
            {/* ---------------------------------------------------------------- */}
            {/* COMAPNY ADDRESS*/}
            {this.renderInput("address", "Company Address")}
            {/* ---------------------------------------------------------------- */}
            {/* CONFIRM INFORMATION */}
            {this.renderButton("Complete")}
          </form>
        </Box>
      </React.Fragment>
    );
  }
}

export default DepartmentForm;
