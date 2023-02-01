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
import PersonnelSignaturePreview from "./personnelSignaturePreview";
import PersonnelForm from "./personnelForm";
import { getemptyPersonnel } from "../services/personnelService";
import OhmswichNavbar from "./common/nav";
import OhmswichFooter from "./common/footer";

class PersonnelTab extends Component {
  state = {
    personnel: { ...getemptyPersonnel() },
  };

  render() {
    return (
      <React.Fragment>
        <OhmswichNavbar />
        <Box mb={10}>
          {/* PERSONNEL TAB */}
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12} md={6}>
                <PersonnelForm
                  key={this.state.personnel._id}
                  onEdit={this.onEdit}
                  onHeadshotChange={this.onHeadshotChange}
                  onConfirm={this.onConfirm}
                  personnel={this.state.personnel}
                />
              </Grid>
              {/* GENERATED SIGNATURE */}
              {/* // TO DO: render percentage */}
              <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                <Card>
                  <CardContent>
                    <PersonnelSignaturePreview
                      key={this.id}
                      onConfirm={this.onConfirm}
                      personnel={this.state.personnel}
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={this.onCopy}
                      size="small"
                      color="secondary"
                      endIcon={
                        this.state.personnel.copied ? (
                          <Check />
                        ) : (
                          <ContentCopy />
                        )
                      }
                    >
                      {this.state.personnel.copied
                        ? "Copied"
                        : "Copy to clipboard"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
          {/* GENERATED SIGNATURE END */}
          {/* PERSONNEL TAB END*/}
        </Box>
        <OhmswichFooter />
      </React.Fragment>
    );
  }

  // Event handlers
  onHeadshotChange = (e) => {
    const personnel = { ...this.state.personnel };
    const imageUrl = e.currentTarget.files[0];

    if (imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          personnel: { imageUrl: imageUrl, headshotPreview: reader.result },
        });
      };
      reader.readAsDataURL(imageUrl);
    } else {
      this.setState({
        ...personnel,
        personnel: { imageUrl: null, headshotPreview: null },
      });
    }
    this.setState({ personnel });
  };

  onEdit(e) {
    const personnel = { ...this.state.personnel };
    personnel[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ personnel });
  }
  onConfirm = (obj, personnel) => {
    this.setState({
      personnel: { ...personnel },
    });
  };
  onCopy = (obj, copy) => {
    let copyText = document.querySelector(".personnel-signature");
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
      personnel: {
        ...prevState,
        copied: true,
      },
    }));
  };
}

export default PersonnelTab;
