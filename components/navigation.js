import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container">
        <header data-thq="thq-navbar" className="navigation-navbar-interactive">
          <Link href="/">
            <a className="navigation-link1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navigation-image"
              />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="navigation-desktop-menu">
            <nav className="navigation-links1">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="navigation-text20">Angebot</span>
                  </Fragment>
                )}
              </span>
              <Link href="/beitrag-bersicht">
                <a className="navigation-link2">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="navigation-text26">Beiträge</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <span className="navigation-text11">
                {props.text2 ?? (
                  <Fragment>
                    <span className="navigation-text23">Workshops</span>
                  </Fragment>
                )}
              </span>
              <Link href="/about">
                <a className="navigation-link3">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="navigation-text29">About</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navigation-mobile-menu">
            <div className="navigation-nav">
              <div className="navigation-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navigation-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navigation-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navigation-links2">
                <span className="navigation-text12">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="navigation-text27">About</span>
                    </Fragment>
                  )}
                </span>
                <span className="navigation-text13">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="navigation-text28">Features</span>
                    </Fragment>
                  )}
                </span>
                <span className="navigation-text14">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="navigation-text19">Pricing</span>
                    </Fragment>
                  )}
                </span>
                <span className="navigation-text15">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="navigation-text21">Team</span>
                    </Fragment>
                  )}
                </span>
                <span className="navigation-text16">
                  {props.text8 ?? (
                    <Fragment>
                      <span className="navigation-text25">Blog</span>
                    </Fragment>
                  )}
                </span>
              </nav>
              <div className="navigation-buttons">
                <button className="navigation-login button">
                  <span>
                    {props.text9 ?? (
                      <Fragment>
                        <span className="navigation-text24">Login</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="button">
                  <span>
                    {props.text10 ?? (
                      <Fragment>
                        <span className="navigation-text22">Register</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navigation-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navigation-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navigation-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navigation-container {
            height: 95px;
            position: relative;
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .navigation-navbar-interactive {
            width: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .navigation-link1 {
            display: contents;
          }
          .navigation-image {
            height: var(--dl-size-size-small);
            padding-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navigation-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navigation-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navigation-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-text11 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navigation-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-logo {
            height: 2rem;
          }
          .navigation-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text13 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-buttons {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navigation-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-text19 {
            display: inline-block;
          }
          .navigation-text20 {
            display: inline-block;
            text-decoration: line-through;
          }
          .navigation-text21 {
            display: inline-block;
          }
          .navigation-text22 {
            display: inline-block;
          }
          .navigation-text23 {
            display: inline-block;
            text-decoration: line-through;
          }
          .navigation-text24 {
            display: inline-block;
          }
          .navigation-text25 {
            display: inline-block;
          }
          .navigation-text26 {
            display: inline-block;
          }
          .navigation-text27 {
            display: inline-block;
          }
          .navigation-text28 {
            display: inline-block;
          }
          .navigation-text29 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .navigation-navbar-interactive {
              height: var(--dl-size-size-small);
              padding-left: 0px;
              padding-right: 0px;
            }
            .navigation-image {
              height: var(--dl-size-size-small);
              padding-top: 0px;
            }
          }
          @media (max-width: 767px) {
            .navigation-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navigation-desktop-menu {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navigation-text12 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text13 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text14 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text15 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text16 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navigation-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  imageAlt: 'logo',
  text6: undefined,
  text: undefined,
  text7: undefined,
  text10: undefined,
  logoAlt: 'image',
  imageSrc: '/hand-logo-blau2-200h.png',
  text2: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text9: undefined,
  text8: undefined,
  text1: undefined,
  text4: undefined,
  text5: undefined,
  text3: undefined,
}

Navigation.propTypes = {
  imageAlt: PropTypes.string,
  text6: PropTypes.element,
  text: PropTypes.element,
  text7: PropTypes.element,
  text10: PropTypes.element,
  logoAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.element,
  logoSrc: PropTypes.string,
  text9: PropTypes.element,
  text8: PropTypes.element,
  text1: PropTypes.element,
  text4: PropTypes.element,
  text5: PropTypes.element,
  text3: PropTypes.element,
}

export default Navigation
