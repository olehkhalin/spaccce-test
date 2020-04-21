import React from "react"
import Form from "./form"

const FirstScreen = () => (
  <div className="first-screen">
    <div className="container">
      <div className="row v-center space-around">
        <div className="first-screen__content">
          <h1>
            <span>Hello 👋🏻</span>
            <br />
            Create a professional online store <br />
            for you and your clients easily!
          </h1>
          <h4>
            Do you have a business and you need a site to evolve it?
            <br />
            Or do you need a site to run a new business?
            <br />
            Join the <span>Spaccce will help you.</span>
          </h4>
          <Form />
        </div>
      </div>
    </div>
  </div>
)

export default FirstScreen
