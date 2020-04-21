import React from "react"
import SpaccceLogo from "../images/spaccce.svg"
import Form from "./form"

const CTAScreen = () => (
  <div className="cta-screen">
    <div className="container">
      <div className="cta-screen__inner">
        <div className="row v-center space-around">
          <div className="cta-screen__content">
            <h2>
              Try <SpaccceLogo />
            </h2>
            <h5>Get own space in the web for you and your clients</h5>
            <Form formClass="secondary" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CTAScreen
