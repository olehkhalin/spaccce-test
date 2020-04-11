import PropTypes from "prop-types"
import React, { useState } from "react"
import axios from "axios"
import addToMailchimp from 'gatsby-plugin-mailchimp';

// https://gmail.us19.list-manage.com/subscribe/post?u=27bcca2b67058c267bc5819c1&amp;id=e03fb8cd72

const checkedIcon = `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.61143 4.8L5.71429 8.7919L14.3886 0L16 1.59838L5.71429 12L0 6.39838L1.61143 4.8Z" fill="white"/></svg>`

const Form = ({ formClass }) => {
  const [serverState, setServerState] = useState(null)

  // const handleOnSubmit = e => {
  //   e.preventDefault()
  //   const form = e.target
  //   setServerState("submitting")
  //   axios({
  //     method: "post",
  //     url: "https://getform.io/f/72b1a0d0-e87d-4c5c-aaba-2c60acdbf04d",
  //     data: new FormData(form),
  //   })
  //     .then(r => {
  //       setServerState("success")
  //       setTimeout(() => {
  //         setServerState(null)
  //         form.reset()
  //       }, 5000)
  //     })
  //     .catch(r => {
  //       setServerState("error")
  //       setTimeout(() => {
  //         setServerState(null)
  //         form.reset()
  //       }, 5000)
  //     })
  // }
  // state = {
  //   name: null,
  //   email: null,
  // }

  const [emailMC, setEmailMC] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState("submitting")
    addToMailchimp(emailMC)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        setServerState("success")
        setTimeout(() => {
          setServerState(null)
          form.reset()
        }, 5000)
      })
      .catch((err) => {
        setServerState("error")
        setTimeout(() => {
          setServerState(null)
          form.reset()
        }, 5000)
      });
  }

  const handleChange = e => {
    setEmailMC(e.target.value)
  }

  let formText = ""
  if (serverState === null || serverState === "submitting") {
    formText = `Free beta release scheduled for 01.08.2020. <span>Request to be the first!</span>`
  } else {
    formText = `<span>You’ll receive an email when your invite is ready</span>`
  }

  let buttonText = ""
  if (serverState === null) {
    buttonText = `Request for free beta invite`
  } else if (serverState === "submitting") {
    buttonText = `Loading...`
  } else {
    buttonText = checkedIcon + ` Invite requested`
  }

  return (
    <div className={"main-form " + formClass}>
      <form className="main-form__content" onSubmit={e => handleSubmit(e)}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email to join the waitlist"
          disabled={serverState !== null}
          required
          onChange={e => handleChange(e)}
        />
        <button
          type="submit"
          className={"button " + formClass}
          disabled={serverState !== null}
          dangerouslySetInnerHTML={{ __html: buttonText }}
        ></button>
      </form>
      <div
        className="main-form__text"
        dangerouslySetInnerHTML={{ __html: formText }}
      ></div>
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
