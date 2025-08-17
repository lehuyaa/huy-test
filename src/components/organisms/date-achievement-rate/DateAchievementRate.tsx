import { mockGetAchievementRate } from "../../../api";
import date_achievement from "../../../assets/images/date_achivement.png";
import { CirclePercent } from "../../atoms";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../atoms/Loading/Loading";
export const DateAchievementRate = () => {
  const { data = { achievementRate: 0, date: "" }, isLoading } = useQuery({
    queryKey: ["achievementRate"],
    queryFn: async () => mockGetAchievementRate("05/21"),
  });

  return (
    <div style={ContainerStyle}>
      {isLoading ? (
        <Loading />
      ) : (
        <CirclePercent percent={data?.achievementRate} date={data?.date} />
      )}
    </div>
  );
};

const ContainerStyle = {
  backgroundImage: `url(${date_achievement})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 400,
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
