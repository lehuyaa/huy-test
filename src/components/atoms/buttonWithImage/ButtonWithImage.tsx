import hexagon_background from "../../../assets/images/hexagon_background.png";

interface Props {
  image: string;
  title: string;
  onClick?: () => void;
}

export const ButtonWithImage = (props: Props) => {
  const { image, title, onClick } = props;

  return (
    <div onClick={onClick} style={ContainerStyle}>
      <img width={45} height={50} src={image} />
      {title}
    </div>
  );
};

const ContainerStyle = {
  backgroundImage: `url(${hexagon_background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 160,
  width: 136,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  flexDirection: "column",
} as const;
