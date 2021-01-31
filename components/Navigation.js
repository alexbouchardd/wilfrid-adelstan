import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getLinkEntryHref from "../utils/getLinkEntryHref";
import theme, { getSpacing } from "./theme";

const Nagivation = ({ logo, links, alt_locale }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setOpen(false);
    };
    router.events.on("hashChangeStart", handleRouteChange);
    return () => {
      router.events.off("hashChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img height="28px" src={logo.fields.file.url} />
        </div>
        <div className="desktop-links">
          {links.map((link) => (
            <Link key={link.sys.id} href={getLinkEntryHref(link)}>
              <a>{link.fields.label}</a>
            </Link>
          ))}
          <Link href="/" locale={alt_locale}>
            <a className="locale">
              {alt_locale === "en" ? "English" : "Français"}
            </a>
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="mobile-links-toggle">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="2" y1="8.5" x2="22" y2="8.5" stroke="black" />
            <line x1="2" y1="15.5" x2="22" y2="15.5" stroke="black" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="mobile-links">
          {links.map((link) => (
            <Link key={link.sys.id} href={getLinkEntryHref(link)}>
              <a>{link.fields.label}</a>
            </Link>
          ))}
          <Link href="/" locale={alt_locale}>
            <a className="locale">
              {alt_locale === "en" ? "English" : "Français"}
            </a>
          </Link>
        </div>
      )}
      <style jsx>{`
        nav {
          z-index: 1000;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          padding: ${getSpacing(9)};
          background-color: rgba(255, 255, 255, 1);
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
        .mobile-links-toggle {
          display: none;
        }
      `}</style>
      <style jsx>{`
        @media only screen and (max-width: 900px) {
          nav {
            padding: ${getSpacing(4)};
          }
          .container {
            z-index: 4;
          }
          img {
            width: 70%;
          }
          .desktop-links {
            display: none;
          }
          .mobile-links-toggle {
            display: flex;
            align-items: center;
            border: none;
            background: transparent;
            text-align: center;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          .mobile-links {
            z-index: 3;
            position: absolute;
            top: 60px;
            padding-bottom: 60px;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
            background-color: rgba(255, 255, 255, 1);
          }
          .locale {
            padding-left: 0;
            border-left: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nagivation;
