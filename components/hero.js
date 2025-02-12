import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-hero ${props.rootClassName} `}>
        <div className="hero-container">
          <h1 className="hero-text10 H1">
            {props.heading ?? (
              <Fragment>
                <span className="hero-text13">digitales Wohlsein</span>
              </Fragment>
            )}
          </h1>
          <span className="hero-text11">
            {props.text ?? (
              <Fragment>
                <span className="hero-text14">
                  <span>
                    Als UX-Experte gestalte ich digitale Systeme, in denen sich
                    Ziele von Unternehmen und ethische Werte verbinden. Meine
                    Arbeit im digitalen Raum zielt darauf ab, Technologie
                    ethisch zu denken: Der Mensch steht im Mittelpunkt, nicht
                    die technische Funktion. Mein Projekt «digitales Wohlsein»
                    unterstützt Menschen dabei, selbstbestimmt und positiv mit
                    technologischen Entwicklungen umzugehen.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Ich kritisiere bestehende digitale Infrastrukturen, Methoden
                    und Regulierungen, die menschliche Grundwerte einfach als zu
                    implementierende Anforderung verstehen. Stattdessen plädiere
                    ich für eine kooperative Entwicklung, bei der Betreiber,
                    Entwickler und Nutzer gemeinsam Technologien gestalten. Eine
                    weitere Aufgabe sehe ich darin, Schutzräume und Orientierung
                    in einer zunehmend undurchsichtigeren, von unrealistischen
                    Wachstumszielen getriebenen digitalen Welt zu schaffen.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Mein Ansatz ist gemeinnützig: Ich möchte ein Internet
                    fördern, das Menschen, andere Lebewesen und unseren Planeten
                    in den Mittelpunkt stellt.
                  </span>
                </span>
              </Fragment>
            )}
          </span>
          <button type="button" className="button">
            <span>
              {props.button ?? (
                <Fragment>
                  <span className="hero-text22">
                    Mehr zu digitales Wohlsein
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .hero-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .hero-text10 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-text11 {
            width: 100%;
            overflow: auto;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-text13 {
            display: inline-block;
          }
          .hero-text14 {
            width: 100%;
            display: inline-block;
            overflow: auto;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-text22 {
            display: inline-block;
          }
          .heroroot-class-name1 {
            position: static;
          }
          @media (max-width: 991px) {
            .hero-container {
              width: 100%;
            }
            .hero-text10 {
              display: flex;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  heading: undefined,
  rootClassName: '',
  text: undefined,
  button: undefined,
}

Hero.propTypes = {
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  button: PropTypes.element,
}

export default Hero
