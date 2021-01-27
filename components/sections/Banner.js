import Image from "next/image";
import theme from "../theme";

const Banner = ({ fields }) => {
  return (
    <section>
      <h1>{fields.title}</h1>
      {fields.text && <p>{fields.text}</p>}
      {fields.footnote && <p className="large">{fields.footnote}</p>}
      <div className="filter" />
      <div className="image">
        <Image
          priority
          objectFit="cover"
          src={`https:${fields.image.fields.file.url}`}
          alt=""
          layout="fill"
        />
      </div>
      <style jsx>{`
        section {
          position: relative;
          z-index: 0;
        }

        h1,
        p {
          color: ${theme.colors.white};
          max-width: 612px;
        }

        .filter {
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.22) 0%,
              rgba(0, 0, 0, 0) 70.1%
            ),
            linear-gradient(0deg, rgba(85, 63, 21, 0.4), rgba(85, 63, 21, 0.4));
        }

        .image {
          position: absolute;
          height: 100%;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -2;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default Banner;
