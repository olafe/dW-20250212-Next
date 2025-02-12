import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BeitrgeListe = (props) => {
  return (
    <>
      <div className={`beitrge-liste-two-middle ${props.rootClassName} `}>
        <h1 className="beitrge-liste-text10 H3">
          {props.heading ?? (
            <Fragment>
              <span className="beitrge-liste-text16">Beiträge</span>
            </Fragment>
          )}
        </h1>
        <Link href="/about">
          <a>
            <h1 className="beitrge-liste-text11 H3">
              {props.heading1 ?? (
                <Fragment>
                  <span className="beitrge-liste-text18">
                    digitales Wohlsein – Das Internet der Zukunft mit dem
                    Menschen im Zentrum
                  </span>
                </Fragment>
              )}
            </h1>
          </a>
        </Link>
        <Link href="/invasion">
          <a>
            <h1 className="beitrge-liste-text12 H3">
              {props.heading2 ?? (
                <Fragment>
                  <span className="beitrge-liste-text17">
                    Die Invasion der Plattformen: Wie Big Tech Familien
                    auseinandertreibt.
                  </span>
                </Fragment>
              )}
            </h1>
          </a>
        </Link>
        <Link href="/i-phone-kindersicher">
          <a>
            <h1 className="beitrge-liste-text13 H3">
              {props.heading3 ?? (
                <Fragment>
                  <span className="beitrge-liste-text15">
                    iPhone kindersicher: Nur eine App zulassen
                  </span>
                </Fragment>
              )}
            </h1>
          </a>
        </Link>
        <Link href="/kein-spotify">
          <a>
            <h1 className="beitrge-liste-text14 H3">
              {props.heading4 ?? (
                <Fragment>
                  <span className="beitrge-liste-text19">
                    Kein Spotify Kids in der Schweiz: Was Eltern wissen sollten.
                  </span>
                </Fragment>
              )}
            </h1>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .beitrge-liste-two-middle {
            display: block;
            position: relative;
            grid-row-end: 4;
            grid-row-start: 3;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .beitrge-liste-text10 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .beitrge-liste-text11 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .beitrge-liste-text12 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .beitrge-liste-text13 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .beitrge-liste-text14 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .beitrge-liste-text15 {
            display: inline-block;
          }
          .beitrge-liste-text16 {
            display: inline-block;
          }
          .beitrge-liste-text17 {
            display: inline-block;
          }
          .beitrge-liste-text18 {
            display: inline-block;
          }
          .beitrge-liste-text19 {
            display: inline-block;
          }

          .beitrge-listeroot-class-name1 {
            padding-top: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

BeitrgeListe.defaultProps = {
  heading3: undefined,
  rootClassName: '',
  heading: undefined,
  heading2: undefined,
  heading1: undefined,
  heading4: undefined,
}

BeitrgeListe.propTypes = {
  heading3: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  heading4: PropTypes.element,
}

export default BeitrgeListe
