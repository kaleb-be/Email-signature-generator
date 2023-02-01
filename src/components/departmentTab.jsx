import React, { Component } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
} from "@mui/material";
import { ContentCopy, Check } from "@mui/icons-material";
import DepartmentSignaturePreview from "./departmentSignaturePreview";
import DepartmentForm from "./departmentForm";
import { getemptyDepartments } from "../services/departmentService";
import OhmswichNavbar from "./common/nav";
import OhmswichFooter from "./common/footer";

class DepartmentTab extends Component {
  state = {
    department: { ...getemptyDepartments() },
  };
  render() {
    return (
      <React.Fragment>
        <OhmswichNavbar />

        <Box mb={10}>
          <Container maxWidth="xl">
            <Grid container>
              {/* DEPARTMENT TAB */}
              <Grid item xs={12} md={6}>
                <DepartmentForm
                  key={this.state.department._id}
                  onEdit={this.onEdit}
                  onConfirm={this.onConfirm}
                  department={this.state.department}
                />
              </Grid>
              {/* GENERATED SIGNATURE */}
              {/* // TO DO: render percentage */}
              <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                <Card>
                  <CardContent>
                    <DepartmentSignaturePreview
                      key={this.id}
                      onConfirm={this.onConfirm}
                      department={this.state.department}
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={this.onCopy}
                      size="small"
                      color="secondary"
                      endIcon={
                        this.state.department.copied ? (
                          <Check />
                        ) : (
                          <ContentCopy />
                        )
                      }
                    >
                      {this.state.department.copied
                        ? "Copied"
                        : "Copy to clipboard"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              {/* GENERATED SIGNATURE END */}
              {/* DEPARTMENT TAB END*/}
            </Grid>
          </Container>
        </Box>
        <OhmswichFooter />
      </React.Fragment>
    );
  }
  onConfirm = (obj, department) => {
    this.setState({
      department: { ...department },
    });
  };
  onEdit(e) {
    const department = { ...this.state.department };
    department[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ department });
  }
  onCopy = (obj, copy) => {
    let copyText = document.querySelector(".department-signature");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    document.execCommand("copy", true, copyText);
    this.setState((prevState) => ({
      department: {
        ...prevState,
        copied: true,
      },
    }));
  };
}

export default DepartmentTab;
