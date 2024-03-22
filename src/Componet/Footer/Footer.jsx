import React from "react";
import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <div className="footer">
      <p>
        {" "}
        © 2024 Landing Page Template. by{" "}
        <a href="https://github.com/Abu10thahir7-github/"> Abu thahir</a>{" "}
        <a href="https://github.com/Abu10thahir7-github/">
          <GitHubIcon className="git-icon" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
