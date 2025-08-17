interface Props {
  name: string;
  time: string;
  kcal: string;
}

function ExerciseItem(props: Props) {
  const { name, time, kcal } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #555",
        padding: "6px 0",
      }}
    >
      <div>
        <div>• {name}</div>
        <div style={{ color: "#FFCC00", fontSize: "14px" }}>{kcal}</div>
      </div>
      <div style={{ color: "#FFCC00", whiteSpace: "nowrap" }}>{time}</div>
    </div>
  );
}

export default ExerciseItem;
