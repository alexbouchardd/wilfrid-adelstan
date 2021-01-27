import Link from "next/link";
import getLinkEntryHref from "../utils/getLinkEntryHref";
import theme, { getSpacing } from "./theme";

const Nagivation = ({ logo, links, alt_locale }) => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img height="28x" src={logo.fields.file.url} />
        </div>
        <div>
          {links.map((link) => (
            <Link href={getLinkEntryHref(link)}>
              <a>{link.fields.label}</a>
            </Link>
          ))}
          <Link href="/" locale={alt_locale}>
            <a className="locale">{alt_locale.toUpperCase()}</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        nav {
          z-index: 1000;
          position: sticky;
          margin-top: -2px;
          top: -2px;
          left: 0;
          right: 0;
          padding: ${getSpacing(9)};
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: saturate(180%) blur(12px);
        }

        .container {
          max-width: 1220px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        img {
          vertical-align: bottom;
        }

        a {
          padding: ${getSpacing(2)};
          margin: ${getSpacing(2)};
          text-decoration: none;
          color: ${theme.colors.dark};
        }

        a:hover {
          color: ${theme.colors.primary};
        }

        .locale {
          padding-left: ${getSpacing(6)};
          border-left: ${theme.border};
        }
      `}</style>
    </nav>
  );
};

export default Nagivation;
