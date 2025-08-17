/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { CONTAINER_STYLE, MEAL_TYPE } from "../../../constants";
import { PrimaryButton } from "../../atoms";
import { BodyWeight, DateAchievementRate, FilterButton } from "../../organisms";
import { MealHistory } from "../../organisms";
import { useEffect, useState } from "react";
import Loading from "../../atoms/Loading/Loading";

interface MEAL {
  img: string;
  label: string;
  type: string;
}

const MOCK_MEAL_HISTORY = [
  {
    img: "/d01.png",
    label: "05.21.Morning",
    type: MEAL_TYPE.morning,
  },
  {
    img: "/d02.png",
    label: "05.21.Lunch",
    type: MEAL_TYPE.lunch,
  },
  {
    img: "/l01.png",
    label: "05.21.Dinner",
    type: MEAL_TYPE.dinner,
  },
  {
    img: "/l02.png",
    label: "05.21.Snack",
    type: MEAL_TYPE.snack,
  },
  {
    img: "/l03.png",
    label: "05.20.Morning",
    type: MEAL_TYPE.morning,
  },
  {
    img: "/meal_1.png",
    label: "05.20.Lunch",
    type: MEAL_TYPE.lunch,
  },
  {
    img: "/d01.png",
    label: "05.20.Dinner",
    type: MEAL_TYPE.dinner,
  },
  {
    img: "/l02.png",
    label: "05.20.Snack",
    type: MEAL_TYPE.snack,
  },
];

export const TopPage = () => {
  const [mealHistory, setMealHistory] = useState<MEAL[]>([]);

  const { data = MOCK_MEAL_HISTORY, isLoading } = useQuery({
    queryKey: ["mealHistory"],
    queryFn: async (): Promise<MEAL[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(MOCK_MEAL_HISTORY);
        }, 1000);
      });
    },
  });

  useEffect(() => {
    if (!!data && Array.isArray(data)) {
      setMealHistory([...mealHistory, ...data]);
    }
  }, [data]);

  const onFilter = (filter: string) => {
    if (filter === MEAL_TYPE.all) {
      setMealHistory(MOCK_MEAL_HISTORY);
      return;
    }
    setMealHistory(mealHistory.filter((item) => item.type === filter));
  };

  return (
    <div
      style={{
        ...CONTAINER_STYLE,
        paddingBottom: 64,
      }}
    >
      <div style={DateAndBodyWeightStyle}>
        <DateAchievementRate />
        <BodyWeight />
      </div>
      <div style={MealHistoryContainer}>
        <div style={MealHistoryStyle}>
          <FilterButton onFilter={onFilter} />
          {isLoading ? <Loading /> : <MealHistory mealHistory={mealHistory} />}
          <PrimaryButton
            title={"記録をもっと見る"}
            onClick={() => {
              setMealHistory([...mealHistory, ...MOCK_MEAL_HISTORY]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const DateAndBodyWeightStyle = {
  display: "flex",
  flexDirection: "row",
  width: 1700,
} as const;

const MealHistoryStyle = {
  width: 1280,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
} as const;

const MealHistoryContainer = {
  display: "flex",
  flexDirection: "column",
  width: 1700,
  alignItems: "center",
} as const;
