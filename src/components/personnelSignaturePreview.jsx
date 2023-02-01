import React from "react";
// import LinkedIn from "../images/linkedin-circle.png";
// import Twitter from "../images/twitter-circle.png";
// import Facebook from "../images/facebook-circle.png";

const PersonnelSignaturePreview = ({ personnel }) => {
  return (
    <div style={{ all: "unset" }} className="personnel-signature">
      <p className="MsoNormal" style={{ textAlign: "justify" }}>
        <img
          width="137"
          height="168"
          src={personnel.headshotPreview}
          align="left"
          hspace="12"
          alt={personnel.name + " Headshot photo"}
          id="image004.jpg@01D85179.3ED46830"
        />
        <b>
          <i>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
            >
              {personnel.greeting}
            </span>
          </i>
        </b>
      </p>
      <p
        className="MsoNormal"
        style={{ marginLeft: ".5in", textAlign: "justify" }}
      >
        <b>
          <span
            style={{
              fontSize: "22.0pt",
              fontFamily: "Giddyup Std",
              color: "#CCCCFF",
            }}
          >
            {personnel.name}{" "}
          </span>
        </b>
        <b>
          <i>
            <span
              style={{
                fontSize: "22.0pt",
                fontFamily: "Giddyup Std",
                color: "#CCCCFF",
              }}
            >
              &nbsp;
            </span>
          </i>
        </b>
      </p>
      <p
        className="MsoNormal"
        style={{ marginLeft: ".5in", textAlign: "justify" }}
      >
        <b>
          <i>
            <span
              style={{ fontFamily: '"Arial",sans-serif', color: "#CCCCFF" }}
            >
              {personnel.title}
            </span>
          </i>
        </b>
      </p>
      <p
        className="MsoNormal"
        style={{ marginLeft: ".5in", textAlign: "justify" }}
      >
        <b>
          <span
            style={{
              fontSize: "18.0pt",
              fontFamily: '"Calibri",sans-serif',
              color: "aqua",
            }}
          >
            Ohm
          </span>
        </b>
        <b>
          <span
            style={{
              fontSize: "18.0pt",
              fontFamily: '"Calibri",sans-serif',
              color: "purple",
            }}
          >
            swich{" "}
          </span>
        </b>
        <b>
          <span
            style={{
              fontSize: "18.0pt",
              fontFamily: '"Calibri",sans-serif',
              color: "#1F497D",
            }}
          >
            Ltd
          </span>
        </b>
        <span
          style={{
            fontSize: "16.0pt",
            fontFamily: '"Calibri",sans-serif',
            color: "#1F497D",
          }}
        ></span>
      </p>
      <p className="MsoNormal" style={{ marginLeft: ".5in" }}>
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            A:
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          {" "}
          {personnel.address}
        </span>
      </p>

      <p className="MsoNormal" style={{ marginLeft: ".5in" }}>
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            e:
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          {" "}
          <a
            href={"mailto:" + personnel.email}
            className="mailto-link"
            target="_blank"
            rel="noreferrer"
          >
            {personnel.email}
          </a>
        </span>
        <span
          style={{ fontFamily: '"Calibri",sans-serif', color: "gray" }}
        ></span>
      </p>
      <p className="MsoNormal" style={{ marginLeft: ".5in" }}>
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            T:{" "}
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          {personnel.telephone} [Telegram]
        </span>
      </p>
      <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
        <span style={{ color: "#1F497D" }}>&nbsp;</span>
      </p>
      <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
        <span style={{ color: "#1F497D" }}>&nbsp;</span>
        <b>
          <i>
            <span
              style={{
                fontSize: "22.0pt",
                fontFamily: "Giddyup Std",
                color: "#CCCCFF",
              }}
            >
              Royalty
            </span>
          </i>
        </b>
        <b>
          <i>
            <span style={{ fontFamily: "Giddyup Std", color: "#CCCCFF" }}>
              {" "}
            </span>
          </i>
        </b>
        <b>
          <i>
            <span style={{ fontFamily: "Kristen ITC", color: "#CCCCFF" }}>
              and
            </span>
          </i>
        </b>
        <b>
          <i>
            <span style={{ fontFamily: "Giddyup Std", color: "#CCCCFF" }}>
              {" "}
            </span>
          </i>
        </b>
        <i>
          <span
            style={{
              fontSize: "22.0pt",
              fontFamily: "Brush Script MT",
              color: "#CCCCFF",
            }}
          >
            Tranquility
          </span>
        </i>
        <b>
          <i>
            <span
              style={{
                fontSize: "22.0pt",
                fontFamily: "Giddyup Std",
                color: "#CCCCFF",
              }}
            ></span>
          </i>
        </b>
      </p>
      <p className="MsoNormal">
        <span
          style={{
            fontSize: "11.0pt",
            fontFamily: '"Calibri",sans-serif',
            color: "#1F497D",
          }}
        >
          &nbsp;
        </span>
      </p>
      <p className="MsoNormal">
        <span
          style={{
            fontSize: "11.0pt",
            fontFamily: '"Calibri",sans-serif',
            color: "#1F497D",
          }}
        >
          &nbsp;
        </span>
      </p>
    </div>
  );
};

export default PersonnelSignaturePreview;
