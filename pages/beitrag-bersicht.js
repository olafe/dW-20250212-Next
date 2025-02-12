import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import BeitrgeListe from '../components/beitrge-liste'

const BeitragBersicht = (props) => {
  return (
    <>
      <div className="beitrag-bersicht-container1">
        <Head>
          <title>Beitrag-bersicht - dW-20250212</title>
          <meta property="og:title" content="Beitrag-bersicht - dW-20250212" />
        </Head>
        <div className="beitrag-bersicht-top-navigation">
          <Navigation
            text={
              <Fragment>
                <span className="beitrag-bersicht-text10">Angebot</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="beitrag-bersicht-text11">Beiträge</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="beitrag-bersicht-text12">Workshops</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="beitrag-bersicht-text13">About</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="beitrag-bersicht-text14">About</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="beitrag-bersicht-text15">Features</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="beitrag-bersicht-text16">Pricing</span>
              </Fragment>
            }
            text7={
              <Fragment>
                <span className="beitrag-bersicht-text17">Team</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="beitrag-bersicht-text18">Blog</span>
              </Fragment>
            }
            text9={
              <Fragment>
                <span className="beitrag-bersicht-text19">Login</span>
              </Fragment>
            }
            text10={
              <Fragment>
                <span className="beitrag-bersicht-text20">Register</span>
              </Fragment>
            }
          ></Navigation>
          <div className="beitrag-bersicht-container2"></div>
          <div className="beitrag-bersicht-container3"></div>
        </div>
        <div className="beitrag-bersicht-row-one">
          <div className="beitrag-bersicht-one-left1"></div>
          <div className="beitrag-bersicht-one-right1"></div>
          <div className="beitrag-bersicht-two-middle1">
            <h1 className="beitrag-bersicht-text21 H1">digitales Wohlsein</h1>
            <BeitrgeListe
              heading={
                <Fragment>
                  <span className="beitrag-bersicht-text22">Beiträge</span>
                </Fragment>
              }
              heading1={
                <Fragment>
                  <span className="beitrag-bersicht-text23">
                    digitales Wohlsein – Das Internet der Zukunft mit dem
                    Menschen im Zentrum
                  </span>
                </Fragment>
              }
              heading2={
                <Fragment>
                  <span className="beitrag-bersicht-text24">
                    Die Invasion der Plattformen: Wie Big Tech Familien
                    auseinandertreibt.
                  </span>
                </Fragment>
              }
              heading3={
                <Fragment>
                  <span className="beitrag-bersicht-text25">
                    iPhone kindersicher: Nur eine App zulassen
                  </span>
                </Fragment>
              }
              heading4={
                <Fragment>
                  <span className="beitrag-bersicht-text26">
                    Kein Spotify Kids in der Schweiz: Was Eltern wissen sollten.
                  </span>
                </Fragment>
              }
              rootClassName="beitrge-listeroot-class-name1"
            ></BeitrgeListe>
            <div className="beitrag-bersicht-container4"></div>
          </div>
        </div>
        <div className="beitrag-bersicht-row-two">
          <div className="beitrag-bersicht-one-left2"></div>
          <div className="beitrag-bersicht-one-right2"></div>
          <div className="beitrag-bersicht-two-middle2">
            <h1 className="beitrag-bersicht-text27 H3">
              Kostenlose Inhalte von digitales Wohlsein
            </h1>
            <span>
              Über meinen Newsletter können Sie an dieser Vision teilhaben und
              mich durch Aufträge, Beiträge oder Spenden unterstützen.
            </span>
            <div className="beitrag-bersicht-container5">
              <div className="beitrag-bersicht-container6">
                <Script
                  html={`<div id="formContentId"></div>
<script src="https://api.mailxpert.ch/forms.js"></script>
<script type="text/javascript">
    mailxpert.forms.include({
        src: 'https://web.swissnewsletter.ch/e/131aa942a9239839/de/form/e34e7733-a658-4abd-88fc-6075b64f658b.html?render=container',
        element: document.getElementById('formContentId'),
        type: 'subscription_form',
    });
</script>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .beitrag-bersicht-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .beitrag-bersicht-top-navigation {
            width: 100%;
            height: 100px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .beitrag-bersicht-text10 {
            display: inline-block;
            text-decoration: line-through;
          }
          .beitrag-bersicht-text11 {
            display: inline-block;
          }
          .beitrag-bersicht-text12 {
            display: inline-block;
            text-decoration: line-through;
          }
          .beitrag-bersicht-text13 {
            display: inline-block;
          }
          .beitrag-bersicht-text14 {
            display: inline-block;
          }
          .beitrag-bersicht-text15 {
            display: inline-block;
          }
          .beitrag-bersicht-text16 {
            display: inline-block;
          }
          .beitrag-bersicht-text17 {
            display: inline-block;
          }
          .beitrag-bersicht-text18 {
            display: inline-block;
          }
          .beitrag-bersicht-text19 {
            display: inline-block;
          }
          .beitrag-bersicht-text20 {
            display: inline-block;
          }
          .beitrag-bersicht-container2 {
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .beitrag-bersicht-container3 {
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .beitrag-bersicht-row-one {
            width: 100%;
            height: 100%;
            display: grid;
            padding-top: var(--dl-space-space-unit);
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .beitrag-bersicht-one-left1 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .beitrag-bersicht-one-right1 {
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .beitrag-bersicht-two-middle1 {
            display: block;
            grid-row-end: 4;
            grid-row-start: 3;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .beitrag-bersicht-text21 {
            width: auto;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .beitrag-bersicht-text22 {
            display: inline-block;
          }
          .beitrag-bersicht-text23 {
            display: inline-block;
          }
          .beitrag-bersicht-text24 {
            display: inline-block;
          }
          .beitrag-bersicht-text25 {
            display: inline-block;
          }
          .beitrag-bersicht-text26 {
            display: inline-block;
          }
          .beitrag-bersicht-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: #000000;
            border-style: solid;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .beitrag-bersicht-row-two {
            width: 100%;
            height: 100%;
            display: grid;
            padding-top: var(--dl-space-space-unit);
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .beitrag-bersicht-one-left2 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .beitrag-bersicht-one-right2 {
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .beitrag-bersicht-two-middle2 {
            display: block;
            grid-row-end: 4;
            grid-row-start: 3;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .beitrag-bersicht-text27 {
            padding-bottom: var(--dl-space-space-unit);
          }
          .beitrag-bersicht-container5 {
            height: 200px;
          }
          .beitrag-bersicht-container6 {
            display: contents;
          }
          @media (max-width: 991px) {
            .beitrag-bersicht-text21 {
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

export default BeitragBersicht
