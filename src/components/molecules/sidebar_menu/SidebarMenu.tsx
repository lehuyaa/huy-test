import { useState } from "react";
import menu from "../../../assets/images/icon_menu.png";
import { useNavigate } from "react-router-dom";
import { COLUMN_PATH } from "../../../routes/path";

const menuItems = [
  "自分の記録",
  "体重グラフ",
  "目標",
  "選択中のコース",
  "コラム一覧",
  "設定",
];

export const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {open && (
        <div style={SideBarContainer}>
          <button onClick={() => setOpen(false)} style={CloseButtonStyle}>
            ✕
          </button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {menuItems.map((item, i) => (
              <div
                key={i}
                style={SidebarItem}
                onClick={() => {
                  setOpen(false);
                  navigate(COLUMN_PATH);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      <img
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
        width={32}
        height={32}
        src={menu}
      />
    </div>
  );
};

const SideBarContainer = {
  position: "fixed",
  top: 88,
  right: 0,
  width: "250px",
  backgroundColor: "#555",
  color: "white",
  boxShadow: "2px 0 6px rgba(0,0,0,0.2)",
  zIndex: 1000,
  paddingTop: "40px",
} as const;

const CloseButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "24px",
  color: "orange",
  cursor: "pointer",
} as const;

const SidebarItem = {
  padding: "16px",
  borderBottom: "1px solid #666",
  cursor: "pointer",
};
