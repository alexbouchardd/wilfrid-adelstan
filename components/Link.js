import Link from "next/link";
import getLinkEntryHref from "../utils/getLinkEntryHref";
import theme, { getPixelToRem, getSpacing } from "./theme";

const AppLink = ({ link }) => {
  return (
    <>
      <Link href={getLinkEntryHref(link)}>
        <a target={link.fields.fileLink ? "_blank" : "_self"}>
          {link.fields.label}
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 4H6.5V4.25V5.75V6H6.75H11.0889L2.82322 14.2657L2.64645 14.4425L2.82322 14.6193L3.88072 15.6768L4.0575 15.8536L4.23428 15.6768L12.5 7.41105V11.75V12H12.75H14.25H14.5V11.75V4.25V4H14.25H6.75Z"
              fill="#AC7E25"
              stroke="#AC7E25"
              strokeWidth="0.5"
            />
          </svg>
          <style jsx>{`
            a {
              display: block;
              margin-bottom: ${getSpacing(2)};
              font-size: ${getPixelToRem(20)};
              font-weight: bold;
              text-decoration: none;
              color: ${theme.colors.primary};
            }

            svg {
              vertical-align: middle;
              margin-left: ${getSpacing(2)};
            }

            a:hover {
              text-decoration: underline;
              color: ${theme.colors.primary};
            }
          `}</style>
        </a>
      </Link>
    </>
  );
};

export default AppLink;
