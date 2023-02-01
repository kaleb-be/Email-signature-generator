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

class LoginForm extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: { name: "", email: "", password: "" },
  };

  schema = {
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

  onSubmit = (e) => {};
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
                <form onSubmit={this.onSubmit}>
                  <CardContent>
                    {/* ---------------------------------------------------------------- */}
                    {/* PERSONNEL EMAIL*/}
                    {this.renderInput(
                      "email",
                      "Company Email",
                      "email",
                      "Remember to use the company email. Eg. yourname@ohmswich.com",
                      true
                    )}
                    {/* ---------------------------------------------------------------- */}
                    {/* PASSWORD*/}
                    {this.renderInput("password", "Password", "password")}
                  </CardContent>
                  <CardActions>{this.renderButton("Login")}</CardActions>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginForm;
