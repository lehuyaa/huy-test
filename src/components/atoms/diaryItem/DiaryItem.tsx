import { DARK_COLOR } from "../../../constants";

interface Props {
  date: string;
  time: string;
  text: string;
}

export const DiaryItem = (props: Props) => {
  const { date, time, text } = props;

  return (
    <div
      style={{
        border: `1px solid ${DARK_COLOR}`,
        padding: "12px",
        borderRadius: "4px",
        background: "#fff",
        fontSize: "14px",
        lineHeight: "1.5",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: 18, color: DARK_COLOR }}>
        {date} <br /> {time}
      </div>
      <p style={{ marginTop: "8px", color: DARK_COLOR }}>{text}</p>
    </div>
  );
};
