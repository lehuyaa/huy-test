import { BACKGROUND_COLOR } from "../../../constants";
import { ButtonWithTitle, Logo } from "../../atoms";
import note from "../../../assets/images/note.png";
import certificate from "../../../assets/images/certificate.png";
import message from "../../../assets/images/message.png";
import { useNavigate } from "react-router-dom";
import { MY_RECORD_PATH } from "../../../routes/path";
import { SidebarMenu } from "../sidebar_menu";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={HeaderContainerStyle}>
      <div style={HeaderContentStyle}>
        <Logo onClick={() => navigate("/")} />
        <div style={listButtonStyle}>
          <ButtonWithTitle
            text="自分の記録"
            icon={note}
            onClick={() => navigate(MY_RECORD_PATH)}
          />
          <ButtonWithTitle
            text="チャレンジ"
            widthIcon={23}
            heightIcon={30}
            icon={certificate}
          />
          <ButtonWithTitle
            text="お知らせ"
            widthIcon={25}
            heightIcon={28}
            icon={message}
          />
          <SidebarMenu />
        </div>
      </div>
    </header>
  );
};

const HeaderContainerStyle = {
  backgroundColor: BACKGROUND_COLOR,
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const HeaderContentStyle = {
  width: 1280,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
} as const;

const listButtonStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
} as const;
