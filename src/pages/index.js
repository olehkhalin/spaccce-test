import React from "react"
// import { Link } from "gatsby"

import "../styles/styles.sass"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
// import TopLine from "../components/topLine"
import FirstScreen from "../components/firstScreen"
import Video from "../components/video"
import Question from "../components/question"
import CTAScreen from "../components/ctaScreen"
import Footer from "../components/footer"

const questionSteps = [
  `<span>Sign in</span><br/> to Spaccce`,
  `<span>Choose a template</span><br/> for your area`,
  `<span>Edit,</span> no coding<br/> required`,
  `<span>Publish</span>`,
  `<span>Share</span><br/> and promote`,
]

const IndexPage = () => (
  <>
    <SEO title="Web store builder" />
    <Header />
    <FirstScreen />
    <Video />
    <Question question="What is it? 🤔">
      Spaccce is a platform to <span>easily create an online store</span> for
      you and your customers.
    </Question>
    <Question question="For whom? 😏" questionClassName="light">
      Spaccce will help people who want to{" "}
      <span>evolve or run a new business</span>.
    </Question>
    <Question question="How does it work? 😎">
      <div className="question-steps">
        {questionSteps.map((stepItem, index) => (
          <div className="question-steps__item" key={index}>
            <div className="question-steps__item-top">
              <div className="question-steps__item-top__inner">{index + 1}</div>
            </div>
            <h3
              className="question-steps__item-bottom"
              dangerouslySetInnerHTML={{ __html: stepItem }}
            ></h3>
          </div>
        ))}
      </div>
    </Question>
    <CTAScreen />
    <Footer />
  </>
)

export default IndexPage
