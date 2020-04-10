import React from "react"
import SpaccceExplainer from "../images/spaccce-explainer.mp4"

const Video = () => (
  <div className="video">
    <div className="container">
      <div className="row v-center space-around">
        <video autoPlay loop muted>
          <source src={SpaccceExplainer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
)

export default Video
