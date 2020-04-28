import { Link } from "gatsby"
import React from "react"
import SpaccceLogo from "../images/spaccce.svg"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row v-center space-between">
        <div className="logo">
          <span>
            <SpaccceLogo />
          </span>
        </div>
        <div className="copy">
          © {new Date().getFullYear()} Spaccce All rights reserved
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
