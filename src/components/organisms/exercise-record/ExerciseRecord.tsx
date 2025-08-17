import { useQuery } from "@tanstack/react-query";
import { DARK_COLOR } from "../../../constants";
import ExerciseItem from "../../atoms/exerciseItem/ExerciseItem";
import Loading from "../../atoms/Loading/Loading";

interface Exercise {
  name: string;
  kcal: string;
  time: string;
}

const exercises = [
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
];

export const ExerciseRecord = () => {
  const { data = exercises, isLoading } = useQuery({
    queryKey: ["exercise"],
    queryFn: async (): Promise<Exercise[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(exercises);
        }, 1000);
      });
    },
  });

  return (
    <div id="exercise" style={ContainerStyle}>
      <div
        style={{
          display: "flex",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "bold", marginRight: 10 }}>MY EXERCISE</span>
        <span>2021.05.21</span>
      </div>

      <div style={ExerciseStyle}>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((ex, i) => (
            <ExerciseItem
              key={i}
              name={ex.name}
              time={ex.time}
              kcal={ex.kcal}
            />
          ))
        )}
      </div>

      <style>
        {`
            div::-webkit-scrollbar {
              width: 6px;
            }
            div::-webkit-scrollbar-track {
              background: #555;
            }
            div::-webkit-scrollbar-thumb {
              background: #FFCC00;
              border-radius: 4px;
            }
          `}
      </style>
    </div>
  );
};

const ContainerStyle = {
  background: DARK_COLOR,
  color: "white",
  padding: "16px",
  borderRadius: "4px",
  width: "98%",
  marginTop: "56px",
};

const ExerciseStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px 24px",
  maxHeight: "250px",
  overflowY: "auto",
  paddingRight: "30px",
} as const;
