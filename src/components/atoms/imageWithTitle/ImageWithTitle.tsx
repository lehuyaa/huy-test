import { PRIMARY_COLOR } from "../../../constants";

interface Props {
  image: string;
  title: string;
  width?: number;
  height?: number;
}

function ImageWithTitle(props: Props) {
  const { image = "", title = "", width = 310, height = 310 } = props;

  return (
    <div style={{ position: "relative" }}>
      <img
        src={image}
        alt={title}
        style={{ width: width, height: height, borderRadius: "4px" }}
      />
      <div style={TitleStyle}>{title}</div>
    </div>
  );
}

const TitleStyle = {
  position: "absolute",
  bottom: 6,
  left: "0",
  right: "0",
  background: PRIMARY_COLOR,
  color: "white",
  padding: "4px 8px",
  fontSize: "14px",
  fontWeight: "bold",
  width: "50%",
} as const;

export default ImageWithTitle;
