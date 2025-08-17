import { RecommendButton } from "../../atoms";

export const RecommendedButton = () => {
  const items = [
    { title: "RECOMMENDED COLUMN", subtitle: "オススメ" },
    { title: "RECOMMENDED DIET", subtitle: "ダイエット" },
    { title: "RECOMMENDED BEAUTY", subtitle: "美容" },
    { title: "RECOMMENDED HEALTH", subtitle: "健康" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
      }}
    >
      {items.map((item, i) => (
        <RecommendButton key={i} title={item.title} subtitle={item.subtitle} />
      ))}
    </div>
  );
};
