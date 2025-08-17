import { DARK_COLOR, PRIMARY_COLOR } from "../../../constants";
import ImageWithTitle from "../../atoms/imageWithTitle/ImageWithTitle";

interface Props {
  image: string;
  date: string;
  title: string;
  subtitle: string;
}

export const RecommendItem = (props: Props) => {
  const { image, date, title, subtitle } = props;

  return (
    <div>
      <ImageWithTitle image={image} title={date} />
      <h3
        style={{
          color: DARK_COLOR,
          fontSize: "15px",
          margin: "0",
          fontWeight: 300,
        }}
      >
        {title}
      </h3>
      <p style={{ margin: "0", fontSize: "12px", color: PRIMARY_COLOR }}>
        {subtitle}
      </p>
    </div>
  );
};
