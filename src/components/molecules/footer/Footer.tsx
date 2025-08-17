import { BACKGROUND_COLOR } from "../../../constants";

const listFooterURL = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

export const Footer = () => {
  return (
    <footer style={FooterContainerStyle}>
      <div style={FooterContentStyle}>
        <div style={footerUrlStyle}>
          {listFooterURL.map((item) => (
            <p key={item} style={textStyle}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

const FooterContainerStyle = {
  backgroundColor: BACKGROUND_COLOR,
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const FooterContentStyle = {
  width: 1280,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
} as const;

const textStyle = { fontWeight: "300", fontSize: 11, cursor: "pointer" };

const footerUrlStyle = {
  width: 860,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
} as const;
