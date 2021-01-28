import Image from "next/image";
import { getSpacing } from "../theme";

const Contact = ({ fields }) => {
  return (
    <section id={fields.slug}>
      <div className="container">
        <h2>{fields.title}</h2>
        <br />
        <div className="grid">
          {fields.person.map((person) => (
            <div id={person.sys.id}>
              <div className="image">
                <Image
                  objectFit="cover"
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
        <div>
          <p>{fields.address}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 900px;
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
