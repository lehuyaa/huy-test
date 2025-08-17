import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../molecules";
import scroll from "../../../assets/images/component_scroll.png";

export const MainLayout = () => {
  return (
    <div style={layoutContainerStyle}>
      <Header />
      <Outlet />
      <Footer />
      <img
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "5%",
          bottom: 20,
        }}
        width={50}
        height={50}
        src={scroll}
      />
    </div>
  );
};

const layoutContainerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  margin: 0,
  position: "relative",
} as const;
