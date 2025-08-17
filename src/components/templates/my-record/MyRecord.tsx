import { RecordCard } from "../../molecules";
import { BodyWeight, DiaryRecord, ExerciseRecord } from "../../organisms";
import { CONTAINER_STYLE } from "../../../constants";
import body_record from "../../../assets/images/body-record.png";
import my_exercise from "../../../assets/images/my-exercise.png";
import my_diary from "../../../assets/images/my-diary.png";

export const MyRecord = () => {
  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  return (
    <div
      style={{
        ...CONTAINER_STYLE,
        paddingBottom: 64,
      }}
    >
      <div style={RecordCartStyle}>
        <RecordCard
          onClick={() => scrollToSection("body-weight")}
          image={body_record}
          title={"BODY RECORD"}
          content={"自分のカラダの記録"}
        />
        <RecordCard
          onClick={() => scrollToSection("exercise")}
          image={my_exercise}
          title={"MY EXERCISE"}
          content={"自分の運動の記録"}
        />
        <RecordCard
          onClick={() => scrollToSection("diary")}
          image={my_diary}
          title={"MY DIARY"}
          content={"自分の日記"}
        />
      </div>
      <div style={MyRecordStyle}>
        <BodyWeight width="92.5%" title="BODY RECORD" date="2021.05.21" />
        <ExerciseRecord />
        <DiaryRecord />
      </div>
    </div>
  );
};

const RecordCartStyle = {
  display: "flex",
  flexDirection: "row",
  width: 1280,
  justifyContent: "space-between",
  paddingTop: 50,
  paddingBottom: 50,
} as const;

const MyRecordStyle = {
  width: 1280,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
} as const;
