import PropTypes from "prop-types"
import React from "react"

const Form = ({ formClass }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch('/mail.php', {
      method: 'POST',
      body: data,
    });

    console.log(data.get('email'));
  }

  return (
    <div className={"main-form " + formClass}>
      <form className="main-form__content"  onSubmit={e => handleSubmit(e)}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email to join the waitlist"
        />
        <button type="submit" className={"button " + formClass}>Request for free beta invite</button>
      </form>
      <div className="main-form__text">
        Free beta release scheduled for 01.08.2020.{" "}
        <span>Request to be the first!</span>
      </div>
    </div>
  )
}

Form.propTypes = {
  formClass: PropTypes.string,
}

Form.defaultProps = {
  formClass: ``,
}

export default Form
