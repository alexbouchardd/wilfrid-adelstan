import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import theme, { getSpacing } from "../theme";
import Link from "../Link";

const Content = ({ fields }) => {
  return (
    <section id={fields.slug}>
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
        {fields.links?.map((link) => {
          return <Link key={link.sys.id} link={link} />;
        })}
      </div>
      {fields.image && (
        <div className="image">
          <Image
            objectFit={
              fields.image.fields.file.contentType !== "image/svg+xml"
                ? "cover"
                : "contain"
            }
            src={`https:${fields.image.fields.file.url}`}
            alt={fields.image.fields.title}
            layout="fill"
          />
        </div>
      )}
      <style jsx>{`
        section {
          ${fields.image
            ? `
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 100px;
          `
            : ""}
          ${fields.smallTopPadding
            ? `
            padding-top: ${getSpacing(10)};
          `
            : ""}
        }

        .content {
          text-align: ${fields.image ? "left" : "center"};
          ${!fields.image ? `margin: 0 auto;` : ""}
          max-width: 900px;
        }

        .h1,
        .h2,
        .h3 {
          margin-top: 0;
        }

        .image {
          position: relative;
          width: 100%;
          ${fields.image.fields.file.contentType !== "image/svg+xml"
            ? `
            border: 1px solid ${theme.colors.primary};
            box-sizing: border-box;
            box-shadow: 0px 0px 0px 20px ${theme.colors.light_primary};
          `
            : ""}
        }
      `}</style>
    </section>
  );
};

export default Content;
