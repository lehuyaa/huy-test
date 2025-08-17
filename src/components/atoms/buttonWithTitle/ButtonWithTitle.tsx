interface ButtonWithTitleProps {
  widthIcon?: number;
  heightIcon?: number;
  icon: string;
  text: string;
  onClick?: () => void;
}

export const ButtonWithTitle = ({
  heightIcon = 32,
  widthIcon = 32,
  icon,
  text,
  onClick = () => {},
}: ButtonWithTitleProps) => {
  return (
    <div onClick={onClick} style={container}>
      <img width={widthIcon} height={heightIcon} src={icon} />
      <p style={textStyle}>{text}</p>
    </div>
  );
};

const textStyle = { fontWeight: "300", fontSize: 16, marginLeft: 8 };
const container = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: 8,
  paddingRight: 32,
  cursor: "pointer",
} as const;
