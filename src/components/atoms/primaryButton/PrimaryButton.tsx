interface Props {
  onClick?: () => void;
  title?: string;
}

export const PrimaryButton = ({ onClick = () => {}, title = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      style={ContainerStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.opacity = "0.9";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.opacity = "1";
      }}
    >
      {title}
    </button>
  );
};

const ContainerStyle = {
  background: "linear-gradient(to right, #f7971e, #ffd200)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "16px 40px",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.2s ease, opacity 0.2s ease",
};
