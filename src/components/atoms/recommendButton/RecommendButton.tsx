interface Props {
  title: string;
  subtitle: string;
}

export const RecommendButton = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "white",
        width: "270px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "#FFD700", fontSize: "22px", margin: "0" }}>
        {title}
      </h3>
      <div
        style={{
          width: "40px",
          height: "1px",
          backgroundColor: "#FFD700",
          margin: "6px 0",
        }}
      />
      <p style={{ margin: "0", fontSize: "18px" }}>{subtitle}</p>
    </div>
  );
};
