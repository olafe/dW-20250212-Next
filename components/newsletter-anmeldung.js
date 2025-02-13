import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NewsletterAnmeldung = (props) => {
  return (
    <>
      <div
        className={`newsletter-anmeldung-two-middle ${props.rootClassName} `}
      >
        <h1 className="newsletter-anmeldung-text1 H3">
          {props.heading ?? (
            <Fragment>
              <span className="newsletter-anmeldung-text3">
                Kostenlose Inhalte von digitales Wohlsein
              </span>
            </Fragment>
          )}
        </h1>
        <span>
          {props.text ?? (
            <Fragment>
              <span className="newsletter-anmeldung-text4">
                Über meinen Newsletter können Sie an dieser Vision teilhaben und
                mich durch Aufträge, Beiträge oder Spenden unterstützen.
              </span>
            </Fragment>
          )}
        </span>
        <div className="newsletter-anmeldung-container1">
          <div className="newsletter-anmeldung-container2">
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
      <style jsx>
        {`
          .newsletter-anmeldung-two-middle {
            display: block;
            position: relative;
            grid-row-end: 4;
            grid-row-start: 3;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .newsletter-anmeldung-text1 {
            padding-bottom: var(--dl-space-space-unit);
          }
          .newsletter-anmeldung-container1 {
            height: 200px;
          }
          .newsletter-anmeldung-container2 {
            display: contents;
          }
          .newsletter-anmeldung-text3 {
            display: inline-block;
          }
          .newsletter-anmeldung-text4 {
            display: inline-block;
          }
          .newsletter-anmeldungroot-class-name {
            max-width: auto;
          }
        `}
      </style>
    </>
  )
}

NewsletterAnmeldung.defaultProps = {
  heading: undefined,
  text: undefined,
  rootClassName: '',
}

NewsletterAnmeldung.propTypes = {
  heading: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default NewsletterAnmeldung
