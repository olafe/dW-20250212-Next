import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import NewsletterAnmeldung from '../components/newsletter-anmeldung'
import BeitrgeListe from '../components/beitrge-liste'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>dW-20250212</title>
          <meta property="og:title" content="dW-20250212" />
        </Head>
        <div className="home-top-navigation">
          <Navigation
            text={
              <Fragment>
                <span className="home-text10">Angebot</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text11">Beiträge</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text12">Workshops</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text13">About</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-text14">About</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="home-text15">Features</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="home-text16">Pricing</span>
              </Fragment>
            }
            text7={
              <Fragment>
                <span className="home-text17">Team</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="home-text18">Blog</span>
              </Fragment>
            }
            text9={
              <Fragment>
                <span className="home-text19">Login</span>
              </Fragment>
            }
            text10={
              <Fragment>
                <span className="home-text20">Register</span>
              </Fragment>
            }
          ></Navigation>
          <div className="home-container2"></div>
          <div className="home-container3"></div>
        </div>
        <div className="home-row-one">
          <div className="home-one-middle">
            <div className="home-hero">
              <div className="home-container4">
                <h1 className="home-text21 H1">digitales Wohlsein</h1>
                <span className="home-text22">
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
                <Link href="/about">
                  <a className="home-link button">
                    <span>Mehr zu digitales Wohlsein</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-one-left1"></div>
          <div className="home-one-right1"></div>
        </div>
        <div className="home-row-two">
          <div className="home-one-left2"></div>
          <div className="home-one-right2"></div>
          <NewsletterAnmeldung
            text={
              <Fragment>
                <span className="home-text31">
                  Über meinen Newsletter können Sie an dieser Vision teilhaben
                  und mich durch Aufträge, Beiträge oder Spenden unterstützen.
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="home-text32">
                  Kostenlose Inhalte von digitales Wohlsein
                </span>
              </Fragment>
            }
          ></NewsletterAnmeldung>
        </div>
        <div className="home-row-three">
          <div className="home-one-left3"></div>
          <div className="home-one-right3"></div>
          <BeitrgeListe
            heading={
              <Fragment>
                <span className="home-text33">Beiträge</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text34">
                  digitales Wohlsein – Das Internet der Zukunft mit dem Menschen
                  im Zentrum
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="home-text35">
                  Die Invasion der Plattformen: Wie Big Tech Familien
                  auseinandertreibt.
                </span>
              </Fragment>
            }
            heading3={
              <Fragment>
                <span className="home-text36">
                  iPhone kindersicher: Nur eine App zulassen
                </span>
              </Fragment>
            }
            heading4={
              <Fragment>
                <span className="home-text37">
                  Kein Spotify Kids in der Schweiz: Was Eltern wissen sollten.
                </span>
              </Fragment>
            }
          ></BeitrgeListe>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-top-navigation {
            width: 100%;
            height: 100px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-text10 {
            display: inline-block;
            text-decoration: line-through;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
            text-decoration: line-through;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-container2 {
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .home-container3 {
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .home-row-one {
            flex: 0;
            width: 100%;
            height: auto;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-one-middle {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .home-hero {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-text21 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text22 {
            width: 100%;
            overflow: auto;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-link {
            text-decoration: none;
          }
          .home-one-left1 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .home-one-right1 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .home-row-two {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-one-left2 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .home-one-right2 {
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-row-three {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-one-left3 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .home-one-right3 {
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-one-middle {
              height: auto;
            }
            .home-container4 {
              width: 100%;
            }
            .home-text21 {
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

export default Home
