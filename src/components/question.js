import PropTypes from "prop-types"
import React from "react"

const Question = ({ questionClassName, question, children }) => (
  <div className={"question " + questionClassName}>
    <div className="container">
      <div className="row v-center">
        <div className="question-item">
          <h2 className="question-quest">{question}</h2>
          <div className="question-answer">{children}</div>
        </div>
      </div>
    </div>
  </div>
)

Question.propTypes = {
  questionClassName: PropTypes.string,
  question: PropTypes.string,
}

Question.defaultProps = {
  questionClassName: ``,
  question: ``,
}

export default Question
