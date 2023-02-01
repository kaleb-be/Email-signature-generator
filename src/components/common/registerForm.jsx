import React from "react";
import Joi from "joi-browser";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  Typography,
} from "@mui/material";
import Form from "./form";
import RenderLogo from "./Logo";

class RegisterForm extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: { name: "", email: "", password: "" },
  };

  schema = {
    fullname: Joi.string()
      .label("Full Name")
      .regex(/(?:[a-zA-Z\-.]) (?:[-a-zA-Z])/g, "Full Name")
      .required(),

    email: Joi.string()
      .label("Company Email")
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@ohmswich.com/g,
        "Ohmswich Email"
      )
      .required(),
    password: Joi.string()
      .label("Password")
      .regex(/(?:[a-zA-Z\-.])/g, "Password"),
  };

  render() {
    return (
      <React.Fragment>
        {/* TODO: work on a better heading. */}
        <Container>
          <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            sx={{ paddingTop: { xs: 20, sm: 10 } }}
          >
            <Grid item xs={12}>
              <Card
                sx={{
                  width: { xs: 340, sm: 480 },
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      component="span"
                      href="/"
                      sx={{
                        mr: 2,
                        display: "flex",
                        textDecoration: "none",
                        letterSpacing: "0.1rem",
                      }}
                    >
                      {RenderLogo(2.2)}
                    </Typography>
                  }
                />
                <form onSubmit={this.props.onSubmit}>
                  <CardContent>
                    {/* ---------------------------------------------------------------- */}
                    {/* USERNAME*/}
                    {this.renderInput(
                      "fullname",
                      "Full Name",
                      "text",
                      "Make sure to include both First Name and Last Name.",
                      true
                    )}
                    {/* ---------------------------------------------------------------- */}
                    {/* PERSONNEL EMAIL*/}
                    {this.renderInput(
                      "email",
                      "Company Email",
                      "email",
                      "Remember to use the company email. Eg. 'yourname@ohmswich.com'."
                    )}
                    {/* ---------------------------------------------------------------- */}
                    {/* PASSWORD*/}
                    {this.renderInput(
                      "password",
                      "Password",
                      "password",
                      "Include letters, numbers, and symbols( _@?#* ) for a stronger password."
                    )}
                  </CardContent>
                  <CardActions>{this.renderButton("Register")}</CardActions>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
