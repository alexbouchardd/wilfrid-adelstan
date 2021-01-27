import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import theme, { getSpacing } from "../theme";

const Contact = ({ fields }) => {
  console.log(fields);
  return (
    <section id={fields.slug}>
      <div className="grid">
        {fields.person.map((person) => (
          <div id={person.sys.id}>
            <div className="image">
              <Image
                objectFit="fit"
                src={`https:${person.fields.picture.fields.file.url}`}
                alt={person.fields.picture.fields.title}
                layout="fill"
              />
            </div>
            <p>{person.fields.name}</p>
            <p>{person.fields.phoneNumber}</p>
            <p>{person.fields.email}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        {fields.address.split(",").map((part) => (
          <p>{part}</p>
        ))}
      </div>
      <style jsx>{`
        section {
          max-width: 900px;
          padding: ${getSpacing(0)};
          padding-bottom: ${getSpacing(40)};
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 100px;
        }

        .image {
          height: 300px;
          position: relative;
          margin-bottom: ${getSpacing(5)};
        }

        p {
          margin-top: 0;
          margin-bottom: 0;
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
      `}</style>
    </section>
  );
};

export default Contact;
