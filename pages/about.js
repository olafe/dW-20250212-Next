import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import BeitrgeListe from '../components/beitrge-liste'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>About - dW-20250212</title>
          <meta property="og:title" content="About - dW-20250212" />
        </Head>
        <div className="about-top-navigation">
          <Navigation
            text={
              <Fragment>
                <span className="about-text10">Angebot</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="about-text11">Beiträge</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="about-text12">Workshops</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="about-text13">About</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="about-text14">About</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="about-text15">Features</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="about-text16">Pricing</span>
              </Fragment>
            }
            text7={
              <Fragment>
                <span className="about-text17">Team</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="about-text18">Blog</span>
              </Fragment>
            }
            text9={
              <Fragment>
                <span className="about-text19">Login</span>
              </Fragment>
            }
            text10={
              <Fragment>
                <span className="about-text20">Register</span>
              </Fragment>
            }
          ></Navigation>
          <div className="about-container2"></div>
          <div className="about-container3"></div>
        </div>
        <div className="about-row-one">
          <div className="about-one-middle">
            <div className="about-content">
              <div className="about-container4">
                <h1 className="about-text21 H1">digitales Wohlsein</h1>
                <h1 className="about-text22 H2">
                  Digitale Zukunft mit dem Menschen im Zentrum
                </h1>
                <span className="about-text23">
                  <span>
                    Beim Projekt «digitales Wohlsein» geht es darum, Menschen
                    jeden Alters dabei zu helfen, sich in der digitalen Welt
                    zurechtzufinden. Gleichzeitig entwickeln wir Ideen, wie ein
                    besseres Internet aussehen könnte – eines, das wirklich die
                    Menschen, die Natur und unsere Umwelt in den Mittelpunkt
                    stellt.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">Warum braucht es überhaupt Hilfe?</span>
                  <br></br>
                  <span>
                    Die heutigen digitalen Systeme haben einen
                    Konstruktionsfehler, den man nicht gleich erkennen kann,
                    dessen schädliche Auswirkungen aber immer deutlicher werden.
                    Zwar haben kluge Entwickler*innen und ihre Geldgeberinnen
                    ein beeindruckendes Spektrum digitaler Technologien
                    geschaffen, die uns Freude bereiten und ganz neue Horizonte
                    für unser Handeln und unsere Gestaltungsmöglichkeiten
                    ermöglicht haben. Aber die Versprechen von einem guten,
                    einem besseren Leben erfüllen sich heute nicht mehr. Unter
                    der schönen Oberfläche entwickeln sich eine Vielzahl
                    problematischer Dinge, die unser Leben zum Schlechten
                    beeinflussen. Und es gibt keinen Grund anzunehmen, dass
                    nicht auch die neuen KI-Systeme, so beeindruckend sie auch
                    sind, die gleichen Grundprobleme haben.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">Was läuft also schief?</span>
                  <br></br>
                  <span>
                    Am Anfang einer App oder Webseite steht meist der Wunsch,
                    etwas Gutes für den Menschen und seine Umwelt zu entwickeln.
                    Aber dann passiert etwas Merkwürdiges: Statt den Menschen im
                    Blick zu behalten, konzentrieren wir uns ohne es zu bemerken
                    bald nur noch auf die Technik und ihre Funktionen. Der
                    Mensch rutscht an den Rand. Ein Beispiel: Die Würde des
                    Menschen und die daraus abgeleitete Freiheit zur
                    Selbstbestimmung sind zentrale Grundwerte in unserer
                    Gesellschaft. Bei der Planung von digitalen Systemen wird
                    die Abwägung, welchen Interessen wir in welchem Masse
                    gerecht werden möchten, von Beginn an zu einer einfach,
                    technisch zu behandelnden Frage umgewandelt: Wer das System
                    wie nutzen darf. Und fast schon selbstverständlich haben die
                    Nutzer dabei am wenigsten zu sagen.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">
                    UX Design: Kleine Schäden verhindern, grosse ignorieren
                  </span>
                  <br></br>
                  <span>
                    Entwicklerinnen sehen Menschen dann oft unbeabsichtigt nur
                    noch als eine Liste von technischen Anforderungen. Werden
                    mögliche, ethische und moralische Konflikte in einem solchen
                    Katalog gar nicht beschrieben, können aufkommende Bedenken
                    umso leichter beiseite geschoben werden. UX Designerinnen,
                    die Gestalter der Benutzeroberflächen, die eigentlich für
                    das gute Internet, aber mindestens für positive
                    Benutzererlebnisse sorgen sollen, können am Ende nur noch
                    Verbesserungen vornehmen, die kleine Schäden verhindern und
                    die grossen ignorieren.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">Was können wir tun?</span>
                  <br></br>
                  <span>
                    Viele Menschen verlassen heute Plattformen wie Facebook oder
                    Instagram. Sie erkennen, dass diese Systeme von Grund auf
                    falsch gebaut wurden und sich nicht reparieren lassen. Die
                    Lösung wäre, neue Apps und Webseiten nach unseren eigenen
                    Vorstellungen zu entwickeln. Das mag schwierig erscheinen,
                    wenn man an den endlosen Strom spannender Inhalte auf TikTok
                    denkt, der nur durch die Möglichkeiten global agierender
                    Monopolisten möglich erscheint. Aber wir wollen auch
                    aufhören, unsere echten Probleme hinter glänzenden
                    Oberflächen zu verstecken.
                  </span>
                  <br></br>
                  <span>
                    Wenn wir jetzt also anfangen, digitale Technik neu zu denken
                    – diesmal mit dem Menschen im Mittelpunkt – dann sollte das
                    vor allem Freude machen, uns und den anderen, so wie wir das
                    bei Facebook und Co zu Beginn erleben konnten. Nur sollte
                    dieser Spass nicht durch den Bau von gigantischen
                    Ablenkungsmaschinen erreicht werden müssen, von denen
                    letztlich wie heute nur einzelne Menschen in Organisationen
                    profitieren.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">
                    Zukünftig: Kooperation zwischen Betreiberin, Entwicklerin,
                    Benutzerin und allen anderen
                  </span>
                  <br></br>
                  <span>
                    Vielmehr müsste dieser durch einen Kooperations-Vertrag
                    zwischen Betreiber- und Entwicklerinnen des Systems, der
                    Benutzerin und allen anderen direkt oder indirekt
                    Beteiligten sichergestellt werden. Mit dem überprüfbarem
                    Ergebnis, dass Leben vieler zu verbessern und den
                    unbeabsichtigten Schäden Rechnung zu tragen.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">
                    Zunächst: Schutzräume, Rettungsinseln und Notfallknöpfe
                  </span>
                  <br></br>
                  <span>
                    Alle einflussreichen, politischen und privaten Anstrengungen
                    zielen momentan allein auf die Vermeidung von Schaden ab,
                    obwohl bekannt sein sollte, dass schädliche Folgen neuer
                    Technologien in der Regel erst Jahre oder Jahrzehnte später
                    erkannt werden können. Nämlich dann, wenn diese in der
                    breiten Gesellschaft verankert sind. Da in den Startups,
                    Initiativen und Gremien die Grundfragen nach den Werten
                    nicht behandelt werden, die ein ein gutes Leben mit
                    digitalen Systemen schaffen könnten, benötigen Benutzerinnen
                    derzeit vor allem Schutz und Abwehrmittel. Schutz und Abwehr
                    vor algorithmischen und KI-Systemen, die sich als
                    freundliche Helfer ausgeben, über deren Ausgestaltung aber
                    weiterhin Einzelpersonen bestimmen, die ihre Intentionen der
                    Bereicherung, des Machtgewinns und der eigenen,
                    unterentwickelten Moralvorstellungen als Grundlage für die
                    Schritt-für-Schritt Entscheidungen der Systeme
                    implementieren.
                  </span>
                  <br></br>
                  <span>
                    Auf dem Weg zu einer besseren Technologie benötigen wir
                    daher zunächst Schutzräume, Rettungsinseln und
                    Notfallknöpfe, um mit den akuten Gefahren der derzeitigen
                    Umwälzungen verantwortlich umzugehen. Solche, die uns vor
                    den mit und in künstlich intelligenten Systemen handelnden
                    Menschen schützen, die ihre schlechten Absichten hinter den
                    freundlichen, virtuellen Assistentinnen verbergen.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="H3">
                    Nachdenken über wohltuende, digitale Inseln, Orte und Welten
                  </span>
                  <br></br>
                  <span>
                    Zugleich sollten wir das Nachdenken über wohltuende,
                    digitale Inseln, Orte und Welten beginnen, indem wir unser
                    Denken über uns, unsere Liebsten und die Welt ändern. Wenn
                    wir dann bei uns erste positive Anzeichen einer Verbesserung
                    erkennen und den Wunsch spüren, uns zusammenzuschliessen,
                    dann sollten wir beginnen, unsere gemeinschaftlich gewonnen
                    Vorstellungen zu notieren und diese schliesslich in
                    kreativen, heilsamen Interaktionen zwischen Mensch und
                    Technologie realisieren.
                  </span>
                  <br></br>
                  <span>«digitales Wohlsein» als gemeinnütziges Projekt</span>
                  <br></br>
                  <span>
                    Aus diesem Grund nutze ich einen grossen Teil meiner
                    unbezahlten Zeit für den Aufbau des Projekts «digitales
                    Wohlsein». Ich hoffe, dass die fehlende, übliche,
                    aggressive, kommerzielle Ausrichtung mich und meine Familie
                    nicht in den finanziellen Ruin treiben. Die Arbeit daran
                    erscheint mir aber gerade unvermeidbar, um überhaupt noch
                    ein erfüllendes, gutes Leben haben zu können. Wir bedürfen
                    keiner oberflächlichen Freundlichkeit, sondern vielmehr ein
                    Miteinander, das Reibungen und Konflikten nicht aus dem Weg
                    geht. Eine selbstbestimmte Gestaltung des Zusammenlebens,
                    freundschaftliches, liebevolles Auseinandersetzen mit den
                    mir Nahestehenden und allen anderen Lebewesen und Dingen
                    dieser Welt.
                  </span>
                  <br></br>
                  <span>
                    Gerne dürfen Sie mich dabei unterstützen, ob durch Aufträge,
                    Beiträge, Tipps, durch eine Spende.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="about-one-left1"></div>
          <div className="about-one-right1"></div>
        </div>
        <div className="about-row-two">
          <div className="about-one-left2"></div>
          <div className="about-one-right2"></div>
          <div className="about-two-middle1">
            <h1 className="about-text70 H3">
              Kostenlose Inhalte von digitales Wohlsein
            </h1>
            <span>
              Über meinen Newsletter können Sie an dieser Vision teilhaben und
              mich durch Aufträge, Beiträge oder Spenden unterstützen.
            </span>
            <div className="about-container5">
              <div className="about-container6">
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
        <div className="about-row-three">
          <div className="about-one-left3"></div>
          <div className="about-one-right3"></div>
          <div className="about-two-middle2">
            <BeitrgeListe
              heading={
                <Fragment>
                  <span className="about-text72">Beiträge</span>
                </Fragment>
              }
              heading1={
                <Fragment>
                  <span className="about-text73">
                    digitales Wohlsein – Das Internet der Zukunft mit dem
                    Menschen im Zentrum
                  </span>
                </Fragment>
              }
              heading2={
                <Fragment>
                  <span className="about-text74">
                    Die Invasion der Plattformen: Wie Big Tech Familien
                    auseinandertreibt.
                  </span>
                </Fragment>
              }
              heading3={
                <Fragment>
                  <span className="about-text75">
                    iPhone kindersicher: Nur eine App zulassen
                  </span>
                </Fragment>
              }
              heading4={
                <Fragment>
                  <span className="about-text76">
                    Kein Spotify Kids in der Schweiz: Was Eltern wissen sollten.
                  </span>
                </Fragment>
              }
              rootClassName="beitrge-listeroot-class-name"
            ></BeitrgeListe>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-top-navigation {
            width: 100%;
            height: 100px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-text10 {
            display: inline-block;
            text-decoration: line-through;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
            text-decoration: line-through;
          }
          .about-text13 {
            display: inline-block;
          }
          .about-text14 {
            display: inline-block;
          }
          .about-text15 {
            display: inline-block;
          }
          .about-text16 {
            display: inline-block;
          }
          .about-text17 {
            display: inline-block;
          }
          .about-text18 {
            display: inline-block;
          }
          .about-text19 {
            display: inline-block;
          }
          .about-text20 {
            display: inline-block;
          }
          .about-container2 {
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .about-container3 {
            grid-row-end: 2;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .about-row-one {
            flex: 0;
            width: 100%;
            height: auto;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-one-middle {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .about-content {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .about-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .about-text21 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .about-text22 {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .about-text23 {
            width: 100%;
            overflow: auto;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .about-one-left1 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .about-one-right1 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .about-row-two {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-one-left2 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .about-one-right2 {
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .about-two-middle1 {
            display: block;
            grid-row-end: 4;
            grid-row-start: 3;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .about-text70 {
            padding-bottom: var(--dl-space-space-unit);
          }
          .about-container5 {
            height: 200px;
          }
          .about-container6 {
            display: contents;
          }
          .about-row-three {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-one-left3 {
            height: 100%;
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-column-start: 1;
          }
          .about-one-right3 {
            grid-row-end: 3;
            grid-row-start: 1;
            grid-column-end: 5;
            grid-column-start: 4;
          }
          .about-two-middle2 {
            display: block;
            grid-row-end: 4;
            grid-row-start: 3;
            grid-column-end: 4;
            grid-column-start: 2;
          }
          .about-text72 {
            display: inline-block;
          }
          .about-text73 {
            display: inline-block;
          }
          .about-text74 {
            display: inline-block;
          }
          .about-text75 {
            display: inline-block;
          }
          .about-text76 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .about-one-middle {
              height: auto;
            }
            .about-container4 {
              width: 100%;
            }
            .about-text21 {
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

export default About
