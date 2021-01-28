import Head from "next/head";

import { fetchEntries } from "../utils/content";

import Nagivation from "../components/Navigation";
import theme, { getPixelToRem, getSpacing } from "../components/theme";
import Sections from "../components/sections";

export default function Home({ home, navigation, locales, locale }) {
  return (
    <div className="container">
      <Head>
        <title>{home.fields.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Nagivation
          logo={navigation.fields.logo}
          links={navigation.fields.links}
          alt_locale={locales.find((l) => l !== locale)}
        />
        <Sections sections={home.fields.sections} />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        section {
          max-width: 1440px;
          margin: 0 auto;
          padding: ${getSpacing(28)};
        }

        * {
          font-style: normal;
          font-family: Larsseit, -apple-system, BlinkMacSystemFont, sans-serif;
          color: ${theme.colors.dark};
          font-size: ${theme.font_size};
          box-sizing: border-box;
          line-height: 1.45;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1,
        .h1 {
          font-size: ${getPixelToRem(60)};
          font-weight: bold;
          line-height: 1.2;
          font-family: Cormorant, Larseeit, -apple-system, BlinkMacSystemFont,
            serif;
        }

        h2,
        .h2 {
          font-size: ${getPixelToRem(44)};
          font-weight: bold;
          line-height: 1.2;
          font-family: Cormorant, Larseeit, -apple-system, BlinkMacSystemFont,
            serif;
        }

        h3,
        .h3 {
          line-height: 1.2;
          font-family: Cormorant, Larseeit, -apple-system, BlinkMacSystemFont,
            serif;
        }

        h1,
        h2,
        h3,
        p {
          margin-bottom: ${getSpacing(6)};
        }

        ul {
          padding-left: 32px;
        }

        li {
          position: relative;
          list-style-type: none;
        }

        strong,
        b {
          color: ${theme.colors.primary};
        }

        hr {
          margin-top: ${getSpacing(12)};
          border: 1px solid ${theme.colors.primary};
        }

        li::before {
          content: "";
          position: absolute;
          vertical-align: bottom;
          left: -32px;
          height: 20px;
          width: 30px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z' fill='%23AC7E25'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.5 10.5H15.51V6.79077L20.7062 12L15.51 17.2093V13.5H3.5V10.5ZM16.01 13H4V11H16.01V8.00002L19.9999 11.9999L16.01 16V13Z' fill='%23AC7E25'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
        }

        p + .large {
          font-size: ${getPixelToRem(24)};
        }
      `}</style>
      <style jsx global>{`
        @media only screen and (max-width: 900px) {
          section {
            padding: ${getSpacing(24)} ${getSpacing(8)};
          }
        }
        @media only screen and (max-width: 600px) {
          h1,
          .h1 {
            font-size: ${getPixelToRem(40)};
          }

          h2,
          .h2 {
            font-size: ${getPixelToRem(32)};
          }

          section {
            padding: ${getSpacing(12)} ${getSpacing(4)};
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps({ locales, locale }) {
  const entries = await fetchEntries(locale);
  return {
    props: {
      locales,
      locale,
      ...entries,
    },
    revalidate: 1,
  };
}
