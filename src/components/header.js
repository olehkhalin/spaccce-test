import { Link } from "gatsby"
// import PropTypes from "prop-types"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { CopyToClipboard } from "react-copy-to-clipboard"

import React, { useState, useMemo } from "react"
import SpaccceLogo from "../images/spaccce.svg"
import ShareArrow from "../images/share-arrow.svg"
import CopyLink from "../images/copy-link.svg"
import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
// import SEO from "./seo"
import TopLine from "./topLine"

const Header = ({ location }) => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  })

  const [copied, setCopied] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y

      const shouldBeStyle = {
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        // transform: isVisible ? "none" : `translate(0, -30px)`,
        transform: isVisible
          ? "none"
          : `translate(0, -${
              document.querySelector(".top-line").offsetHeight
            }px)`,
      }

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )
  // let handleTimeout;
  const [timerr, setTimerr] = useState()

  const copyClicked = () => {
    if (timerr) clearTimeout(timerr)
    setCopied(true)
    setTimerr(
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    )
  }

  const socialShareClicked = (e, target) => {
    e.preventDefault()
    const href = e.target.getAttribute("href")
    window.open(href, target, "height=285,width=550,resizable=1")
  }

  return useMemo(
    () => (
      <>
        {copied ? <div className="link-copied active">Link copied</div> : null}
        <div className="header-wrapper" style={{ ...headerStyle }}>
          <TopLine />
          <header className="header">
            <div className="container">
              <div className="row v-center space-between">
                <div className="logo">
                  <Link to="/">
                    <SpaccceLogo />
                  </Link>
                </div>
                <div className="share">
                  <span>
                    <ShareArrow /> Share
                  </span>
                  <ul className="share-more">
                    <CopyToClipboard
                      text={window.location.href}
                      onCopy={() => copyClicked()}
                    >
                      <li className="link">
                        <CopyLink />
                        Copy link
                      </li>
                    </CopyToClipboard>
                    <li className="facebook">
                      <a
                        onClick={e => socialShareClicked(e, "Facebook")}
                        href={
                          "https://www.facebook.com/sharer/sharer.php?u=" +
                          window.location.href
                        }
                      >
                        <Facebook />
                        Facebook
                      </a>
                    </li>
                    <li className="twitter">
                      <a
                        onClick={e => socialShareClicked(e, "Twitter")}
                        href={
                          "https://twitter.com/intent/tweet?original_referer=" +
                          window.location.href +
                          ";text=I just signed up for the \n" +
                          "@spaccce\n" +
                          " Web Beta. Learn more and sign up for the waiting list here:;url=" +
                          window.location.href
                        }
                      >
                        <Twitter />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    ),
    [copied, headerStyle]
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
