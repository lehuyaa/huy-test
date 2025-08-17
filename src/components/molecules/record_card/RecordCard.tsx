import { GREY, ORANGE, PRIMARY_COLOR } from "../../../constants";

export const RecordCard = ({
  image,
  title,
  content,
  onClick,
}: {
  image: string;
  title: string;
  content: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} style={ContainerStyle}>
      <img src={image} style={ImageStyle} />
      <div
        style={{
          backgroundColor: GREY,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          zIndex: 2,
          textAlign: "center",
          color: "white",
        }}
      >
        <h3
          style={{ margin: "0 0 10px 0", color: PRIMARY_COLOR, fontSize: 25 }}
        >
          {title}
        </h3>
        <button style={TitleStyle}>{content}</button>
      </div>
    </div>
  );
};

const ContainerStyle = {
  width: "340px",
  height: "340px",
  border: `20px solid ${PRIMARY_COLOR}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
} as const;

const ImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(100%)",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  cursor: "pointer",
} as const;

const TitleStyle = {
  backgroundColor: ORANGE,
  border: "none",
  borderRadius: "4px",
  padding: "6px 12px",
  color: "white",
  fontSize: "14px",
  cursor: "pointer",
} as const;
