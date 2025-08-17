import { RecommendBlog, RecommendedButton } from "../../organisms";

export const ColumnPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        paddingBottom: 64,
        paddingTop: 60,
      }}
    >
      <div
        style={{
          width: 1280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <RecommendedButton />
        <RecommendBlog />
      </div>
    </div>
  );
};
