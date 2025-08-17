/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { DiaryItem } from "../../atoms/diaryItem/DiaryItem";
import Loading from "../../atoms/Loading/Loading";
import { PrimaryButton } from "../../atoms";
import { useEffect, useState } from "react";

interface Diary {
  date: string;
  time: string;
  text: string;
}
const mockDiaries = [
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
];

export const DiaryRecord = () => {
  const { data = mockDiaries, isLoading } = useQuery({
    queryKey: ["diaries"],
    queryFn: async (): Promise<Diary[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockDiaries);
        }, 1000);
      });
    },
  });

  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    if (!!data && Array.isArray(data)) {
      setDiaries([...diaries, ...data]);
    }
  }, [data]);

  return (
    <>
      <div
        id="diary"
        style={{
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>MY DIARY</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            diaries.map((d, i) => (
              <DiaryItem key={i} date={d.date} time={d.time} text={d.text} />
            ))
          )}
        </div>
      </div>
      <PrimaryButton
        onClick={() => setDiaries([...diaries, ...mockDiaries])}
        title="自分の日記をもっと見る"
      />
    </>
  );
};
