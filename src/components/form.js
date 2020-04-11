import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import axios from "axios"

const username = "olegkhalin18@gmail.com"
const password = "001132Khalin"
const url = "https://esputnik.com/api/v1/contact/subscribe"
const dataT = {
  contact: {
    channels: {
      type: "email",
      value: "asdfdsafasdsda@mail.mail",
    },
  },
}

const Form = ({ formClass }) => {
  const [submitStatus, setSubmitStatus] = useState("standby")

  // async function fetchUrl() {
  // const response = await fetch(url, {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   // mode: "cors", // no-cors, cors, *same-origin
  //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   // credentials: "omit", // include, *same-origin, omit
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `${username}:${password}`,
  //   },
  //   // redirect: "follow", // manual, *folslow, error
  //   // referrer: "client", // no-referrer, *client
  //   body: JSON.stringify(dataT), // body data type must match "Content-Type" header
  // })
  // const json = await response.json().then(() => {
  //   console.log(response)
  // })
  // console.log(dataT)
  // }

  const handleSubmit = e => {
    e.preventDefault()
    //   const data = new FormData(e.target);
    //
    //   fetch('/mail.php', {
    //     method: 'POST',
    //     body: data,
    //   });
    //
    //   console.log(data.get('email'));
    //   setSubmitStatus("working")
    // fetchUrl().then(() => {
    //   console.log(submitStatus)
    // })
    axios({
      method: "post",
      url: url,
      data: JSON.stringify(dataT),
      headers: {
        "Content-Type": "application/json",
        authentication: `${username}:${password}`,
      },
    })
      .then(r => {
        console.log(r)
      })
      .catch(e => {
        console.log(e)
      })
  }

  // const useFetchPost = submitClick => {
  //
  //
  //   useEffect(() => {
  //     if (submitClick) {
  //       setSubmitStatus("working")
  //       fetchUrl()
  //     }
  //   }, [submitClick])
  //   return [submitStatus, setSubmitStatus]
  // }

  // console.log(JSON.stringify(dataT))

  return (
    <div className={"main-form " + formClass}>
      <form
        className="main-form__content"
        onSubmit={e => handleSubmit(e)}
        // method="post"
        // action="https://getform.io/f/72b1a0d0-e87d-4c5c-aaba-2c60acdbf04d"
      >
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email to join the waitlist"
          required
        />
        <button type="submit" className={"button " + formClass}>
          Request for free beta invite
        </button>
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
