import logo from "../../../assets/images/logo.png";

interface LogoProps {
  width?: number;
  height?: number;
  onClick?: () => void;
}
export const Logo = ({
  width = 110,
  height = 40,
  onClick = () => {},
}: LogoProps) => {
  return (
    <img
      onClick={onClick}
      style={{ cursor: "pointer" }}
      width={width}
      height={height}
      src={logo}
    />
  );
};
