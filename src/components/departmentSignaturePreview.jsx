import React from "react";
// import LinkedIn from "../images/linkedin-circle.png";
// import Twitter from "../images/twitter-circle.png";
// import Facebook from "../images/facebook-circle.png";

const DepartmentSignaturePreview = ({ department }) => {
  return (
    <div style={{ all: "unset" }} className="department-signature">
      <p className="MsoNormal" style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          &nbsp;
        </span>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* DEPARTMENT MOTTO */}
      <p className="MsoNormal" style={{ textAlign: "justify" }}>
        <b>
          <i>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "#A5A5A5" }}
            >
              {department.motto}
            </span>
          </i>
        </b>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* DEPARTMENT NAME */}
      <p className="MsoNormal" style={{ textAlign: "justify" }}>
        <b>
          <i>
            <span
              style={{
                fontSize: "22.0pt",
                fontFamily: "Brush Script MT",
                color: "#CCCCFF",
              }}
            >
              {department.name}
            </span>
          </i>
        </b>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* OFFICE NAME */}
      <p className="MsoNormal" style={{ textAlign: "justify" }}>
        <b>
          <span
            style={{
              fontSize: "22.0pt",
              fontFamily: "'Calibri', sans-serif",
              color: "#C00CFF",
            }}
          >
            {department.office}
          </span>
        </b>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* COMPANY NAME */}
      <p className="MsoNormal">
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
      {/* ---------------------------------------------------------------- */}
      {/* COMPANY REGISTRATION */}
      <p className="MsoNormal">
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            Rgtn № England and Wales:{" "}
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          13743538
        </span>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* COMPANY ADDRESS */}
      <p className="MsoNormal">
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            A:
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          {" "}
        </span>
        <i>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            {department.address}
          </span>
        </i>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* DEPARTMENT EMAIL */}
      <p className="MsoNormal">
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            W:
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          {" "}
          {department.email}
        </span>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* PERSONNEL EMAIL */}
      <p className="MsoNormal">
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
            href={"mailto:" + department.email}
            className="mailto-link"
            target="_blank"
            rel="noreferrer"
          >
            {department.email}
          </a>
        </span>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* DEPARTMENT PHONE NUMBER */}
      <p className="MsoNormal">
        <b>
          <span
            style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}
          >
            M:
          </span>
        </b>
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          {" "}
          {department.telephone}
        </span>
        <span
          style={{
            fontSize: "10.0pt",
            fontFamily: '"Calibri",sans-serif',
            color: "#1F497D",
          }}
        ></span>
      </p>
      <p className="MsoNormal">
        <span style={{ fontFamily: '"Calibri",sans-serif', color: "#1F497D" }}>
          &nbsp;
        </span>
      </p>
      <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
        <span style={{ color: "#1F497D" }}>&nbsp;</span>
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* COMPANY BANNER  */}
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
            <span
              style={{
                fontSize: "22.0pt",
                fontFamily: "Giddyup Std",
                color: "#CCCCFF",
              }}
            >
              {" "}
            </span>
          </i>
        </b>
        <b>
          <i>
            <span
              style={{
                fontFamily: "Kristen ITC",
                color: "#CCCCFF",
              }}
            >
              and
            </span>
          </i>
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

      {/* ---------------------------------------------------------------- */}
    </div>
  );
};

export default DepartmentSignaturePreview;
