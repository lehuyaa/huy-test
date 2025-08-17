/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { PrimaryButton } from "../../atoms";
import { RecommendItem } from "../../molecules";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../atoms/Loading/Loading";

interface RecommendBlog {
  date: string;
  subText: string;
  text: string;
  image: string;
}
const mockRecommendBlog: RecommendBlog[] = [
  {
    date: "2021.05.21",
    image: "/column-1.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-2.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-3.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-4.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-5.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-6.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-7.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.21",
    image: "/column-8.jpg",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subText: "#魚料理  #和食  #DHA",
  },
];

export const RecommendBlog = () => {
  const { data = mockRecommendBlog, isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: async (): Promise<RecommendBlog[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockRecommendBlog);
        }, 1000);
      });
    },
  });

  const [blog, setBlog] = useState<RecommendBlog[]>([]);

  useEffect(() => {
    if (!!data && Array.isArray(data)) {
      setBlog([...blog, ...data]);
    }
  }, [data]);

  return (
    <>
      <div
        id="diary"
        style={{
          width: "100%",
          marginBottom: "30px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            blog.map((d, i) => (
              <RecommendItem
                key={i}
                date={d.date}
                image={d.image}
                title={d.text}
                subtitle={d.subText}
              />
            ))
          )}
        </div>
      </div>
      <PrimaryButton
        onClick={() => setBlog([...blog, ...mockRecommendBlog])}
        title="コラムをもっと見る"
      />
    </>
  );
};
