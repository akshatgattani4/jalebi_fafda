import React, { useState } from "react";
import "./Disabilityrights.css";
import AIchatbotRights from "../components/AIchatbotRights";

const DisabilityRightsInfo = () => {
  const [currentPage, setCurrentPage] = useState("Legal Aid Chatbot");
  return (
    <div style={{ textAlign: "left", padding: "2rem", fontSize: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          // border: "2px solid gray",
          marginBottom: "2rem",
          fontWeight: 600,
          fontSize: "1.7rem",
          justifyContent: "center",
          color: "#2234da",
          // padding: "1rem",
        }}
      > 
        <div
          style={{
            textDecoration:
              currentPage === "Legal Aid Chatbot" ? "underline" : "none",
            color: currentPage === "Legal Aid Chatbot" ? "#e38a43" : "#2234da",
          }}
          onClick={() => setCurrentPage("Legal Aid Chatbot")}
        >
          Legal Aid Chatbot
        </div>
        {/* <div
          style={{
            textDecoration:
              currentPage === "Government Schemes" ? "underline" : "none",
          }}
          onClick={() => setCurrentPage("Government Schemes")}
        >
          Government Schemes
        </div> */}
      </div>
      {currentPage === "Legal Resources" && (
        <div>
          <div
            style={{
              fontSize: "1.75rem",
              fontWeight: 625,
              marginBottom: "1.3rem",
            }}
          >
            <a
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Empowering Disability Advocacy in the Workplace:
            </a>
            A Comprehensive Guide to Rights, Laws, and Legal Support Services
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 625,
              marginBottom: "1.3rem",
              paddingTop: "1.3rem",
            }}
          >
            Here are some information and resources related to disability rights
            and legal support services:
          </div>
          <div style={{}}>
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              1. Americans with Disabilities Act (ADA):
            </a>
            The ADA prohibits discrimination against individuals with
            disabilities in various areas, including employment. ADA National
            Network provides information, training, and resources related to
            ADA. <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              2. Job Accommodation Network (JAN):{" "}
            </a>
            JAN provides free, expert, and confidential guidance on workplace
            accommodations and disability employment issues.{" "}
            <a
              href="https://askjan.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Job Accommodation Network (JAN)
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              3. Equal Employment Opportunity Commission (EEOC):{" "}
            </a>
            EEOC enforces federal laws related to workplace discrimination,
            including ADA. EEOC - Disability Discrimination{" "}
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              4. National Council on Disability (NCD):{" "}
            </a>
            NCD is an independent federal agency promoting policies and
            practices that ensure people with disabilities have equal
            opportunities.{" "}
            <a
              href="https://ncd.gov/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              National Council on Disability
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              5. Disability Rights Legal Center (DRLC):{" "}
            </a>
            DRLC provides legal representation to people with disabilities on a
            wide range of disability-related legal issues.{" "}
            <a
              href="https://drlcenter.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Disability Rights Legal Center{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              6. Disability Rights Advocates (DRA):{" "}
            </a>
            DRA is a non-profit legal center advocating for the civil rights of
            people with disabilities.{" "}
            <a
              href="https://dralegal.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Disability Rights Advocates{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              7. National Disability Rights Network (NDRN):{" "}
            </a>
            NDRN provides legal representation and advocacy for individuals with
            disabilities.{" "}
            <a
              href="https://www.ndrn.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              National Disability Rights Network{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              8. Office of Disability Employment Policy (ODEP):{" "}
            </a>
            ODEP provides information and resources to promote the inclusion of
            people with disabilities in the workforce. Office of Disability
            Employment Policy <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              9. Disability.gov:
            </a>{" "}
            Disability.gov is a comprehensive online resource for information on
            disability programs and services.{" "}
            <a
              href="https://www.disability.gov/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Disability.gov{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              10. Legal Aid Organizations:
            </a>{" "}
            Check with local legal aid organizations that may offer assistance
            to individuals with disabilities.
            <br />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              11. Employee Assistance Programs (EAP):{" "}
            </a>
            Many employers offer EAPs, which can provide confidential counseling
            and assistance for employees facing challenges, including
            disability-related issues.
          </div>
        </div>
      )}
      {currentPage === "Legal Aid Chatbot" && (
        <div>
          <div
            style={{
              fontSize: "1.75rem",
              fontWeight: 625,
              marginBottom: "1.3rem",
            }}
          >
            <a
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              "Empowering Conversations, One Message at a Time: Unlocking
              Answers, Solving Queries, and Bringing Ease to Your Experience
              with our Intelligent Chatbot!"
            </a>
            {/* A Comprehensive Guide to Rights, Laws, and Legal Support Services */}
            <AIchatbotRights />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisabilityRightsInfo;
