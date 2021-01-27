import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import theme, { getSpacing } from "../theme";
import AppLink from "../Link";

const Camper = ({ fields }) => {
  return (
    <section id={fields.slug}>
      <div>
        <h2>{fields.title}</h2>
        {fields.highlights.map((highlight) => (
          <p className="h2">{highlight}</p>
        ))}
        <br />
        {fields.links?.map((link) => {
          return <AppLink key={link.sys.id} link={link} />;
        })}
      </div>
      <div className="content">
        {documentToReactComponents(fields.text, {
          renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => (
              <p className="h1">{children}</p>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
              <p className="h2">{children}</p>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
              <p className="h3">{children}</p>
            ),
          },
        })}
      </div>
      {fields.illustration && (
        <div className="image">
          <Image
            objectFit="fit"
            src={`https:${fields.illustration.fields.file.url}`}
            alt=""
            layout="fill"
          />
        </div>
      )}
      <style jsx>{`
        section {
          position: relative;
          z-index: 0;
          background-color: ${theme.colors.light_primary};
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 100px;
          ${fields.align === "center" ? `margin: 0 auto;` : ""}
        }

        .content {
          margin: 0 auto;
          max-width: 540px;
        }

        h2,
        .h2 {
          margin-bottom: ${getSpacing(2)};
          margin-top: 0;
        }

        .h2 {
          color: ${theme.colors.primary};
        }

        .image {
          position: absolute;
          max-height: 80%;
          top: 10%;
          bottom: 10%;
          left: -10%;
          right: 20%;
          z-index: -2;
          object-fit: contain;
          opacity: 0.2;
        }
      `}</style>
    </section>
  );
};

export default Camper;
