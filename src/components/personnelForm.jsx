import React from "react";
import Joi from "joi-browser";
import Box from "@mui/material/Box";
import Form from "./common/form";
import { getemptyPersonnel } from "../services/personnelService";
import HeadshotInput from "./common/fileInput";
// ----------------------------------------------------------------
class PersonnelForm extends Form {
  state = {
    data: { ...this.props.personnel },
    errors: { ...getemptyPersonnel },
  };

  schema = {
    name: Joi.string()
      .label("Full Name")
      .regex(/(?:[a-zA-Z\-.]) (?:[-a-zA-Z])/g, "Full Name")
      .required(),
    title: Joi.string()
      .label("Job Title")
      .regex(/([a-zA-Z]+ ?){1,7}/g, "Job Title")
      .required(),
    department: Joi.string()
      .label("Department Name")
      .regex(/([a-zA-Z]+ ?){1,7}/g, "Department Name")
      .required(),
    greeting: Joi.string()
      .label("Closing Greeting")
      .regex(/([a-zA-Z]+ ?){1,2}/g, "Closing Greeting")
      .required(),
    address: Joi.string()
      .label("Company Address")
      .regex(/([a-zA-Z]+ ?){1,7}/g, "Company Address")
      .required(),
    telephone: Joi.string()
      .label("Telephone Number")
      .regex(/^(\+[0-9]{12})\b/g, "Phone Number")
      .required(),
    email: Joi.string()
      .label("Company Email")
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@ohmswich.com/g,
        "Ohmswich Email"
      )
      .required(),
    copied: Joi.label("Copied Signature"),
    imageUrl: Joi.any().label("Professional Headshot"),
    headshotPreview: Joi.any().label("Professional Headshot Preview"),
    facebook: Joi.string()
      .label("Job Title")
      .regex(/([a-zA-Z]+ ?){1}/g, "Facebook username")
      .required(),
    twitter: Joi.string()
      .label("Job Title")
      .regex(/([a-zA-Z]+ ?){1}/g, "Twitter username")
      .required(),
    linkedin: Joi.string()
      .label("Job Title")
      .regex(/([a-zA-Z]+ ?){1}/g, "LinkedIn username")
      .required(),
    telegram: Joi.string()
      .label("Job Title")
      .regex(/([a-zA-Z]+ ?){1}/g, "Telegram username")
      .required(),
  };

  onSubmit = (e) => {
    // send data to preview component
    this.props.onConfirm(this.props.personnel, {
      ...this.state.data,
      // copied: false,
    });
  };
  render() {
    return (
      <React.Fragment>
        {/* TODO: work on a better heading. */}
        <Box sx={{ mt: 3, mr: 2 }}>
          <form onSubmit={this.handleCreate}>
            {/* ---------------------------------------------------------------- */}
            {/* PERSONNEL NAME*/}
            {this.renderInput("name", "Full Name", "text", null, true)}
            {/* ---------------------------------------------------------------- */}
            {/* PERSONNEL JOB TITLE*/}
            {this.renderInput("title", "Job Title")}
            {/* ---------------------------------------------------------------- */}
            {/* PERSONNEL DEPARTMENT */}
            {this.renderInput("department", "Department")}
            {/* ---------------------------------------------------------------- */}
            {/* COMAPNY ADDRESS*/}
            {this.renderInput("address", "Company Address")}
            {/* ---------------------------------------------------------------- */}
            {/* PERSONNEL PHONE NUMBER*/}
            {this.renderInput(
              "telephone",
              "Work Phone-Number",
              "tel",
              "Remember to include your country code. Eg: +251912345678"
            )}
            {/* ---------------------------------------------------------------- */}
            {/* PERSONNEL EMAIL*/}
            {this.renderInput(
              "email",
              "Ohmswich Email",
              "email",
              "Make sure to use your company email. Eg: johnsmith@ohmswich.com"
            )}

            {/* ---------------------------------------------------------------- */}
            {/* CLOSING GREETING */}
            {this.renderInput("greeting", "Closing Greeting")}
            {/* ---------------------------------------------------------------- */}
            {/* TELEGRAM */}
            {this.renderInput("telegram", "Telegram username")}
            {/* ---------------------------------------------------------------- */}
            {/* FACEBOOK*/}
            {this.renderInput("facebook", "Facebook username")}
            {/* ---------------------------------------------------------------- */}
            {/* TWITTER */}
            {this.renderInput("twitter", "Twitter username")}
            {/* ---------------------------------------------------------------- */}
            {/* LINKEDIN*/}
            {this.renderInput("linkedin", "LinkedIn username")}
            {/* ---------------------------------------------------------------- */}
            {/* PROFESSIONAL HEADSHOT */}
            <HeadshotInput
              name="imageUrl"
              onHeadshotChange={this.props.onHeadshotChange}
            />
            {/* ---------------------------------------------------------------- */}
            {/* CONFIRM INFORMATION */}
            {this.renderButton("Complete")}
          </form>
        </Box>
      </React.Fragment>
    );
  }
}

export default PersonnelForm;
