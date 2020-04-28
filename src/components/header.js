import { Link } from "gatsby"
// import PropTypes from "prop-types"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { isMobile } from "react-device-detect"

import React, { useState, useMemo, useEffect } from "react"
import SpaccceLogo from "../images/spaccce.svg"
import ShareArrow from "../images/share-arrow.svg"
import CopyLink from "../images/copy-link.svg"
import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
// import SEO from "./seo"
import TopLine from "./topLine"

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  })

  const [copied, setCopied] = useState(false)
  const [location, setLocation] = useState("")

  useEffect(() => {
    setLocation(window.location.href)
  }, [])

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y

      const shouldBeStyle = {
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
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

  const [shareState, setShareState] = useState(false)
  const shareClicked = () => {
    // console.log(isMobile)
    // if (isMobile) {
    setShareState(!shareState)
    // }
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
                  <span>
                    <SpaccceLogo />
                  </span>
                </div>
                <div
                  className={"share " + (shareState ? "active" : null)}
                  onMouseEnter={!isMobile ? () => shareClicked() : null}
                  onMouseLeave={!isMobile ? () => shareClicked() : null}
                >
                  <span onClick={isMobile ? () => shareClicked() : null}>
                    <ShareArrow /> Share
                  </span>
                  <ul className="share-more">
                    <CopyToClipboard
                      text={location}
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
                          location +
                          "&quote=I just signed up for the \#spaccce  Web Beta. Learn more and sign up for the waiting list here:"
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
                          location +
                          ";text=I just signed up for the \n" +
                          "\#spaccce\n" +
                          " Web Beta. Learn more and sign up for the waiting list here:;url=" +
                          location +
                          " http:/www.spaccce.com/static/1a37e170636b1b0d461440a97783a29e/5e089/spaccce.jpg"
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
    [copied, headerStyle, location, shareState]
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
