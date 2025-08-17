import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { DARK_COLOR, GREY } from "../../../constants";
import { mockGetBodyWeight } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../atoms/Loading/Loading";

interface Props {
  width?: string;
  title?: string;
  date?: string;
}

export const BodyWeight = (props: Props) => {
  const { width = "60%", title, date } = props;

  const { data = [], isLoading } = useQuery({
    queryKey: ["bodyWeight"],
    queryFn: async () => mockGetBodyWeight(),
  });

  const ContainerStyle = {
    width: width,
    height: title && date ? 500 : 400,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: DARK_COLOR,
  };

  return (
    <div style={ContainerStyle}>
      {title && date && (
        <div
          style={{
            display: "flex",
            marginBottom: "12px",
            marginTop: "16px",
          }}
        >
          <span style={{ fontWeight: "bold", marginRight: 10 }}>{title}</span>
          <span>{date}</span>
        </div>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <ResponsiveContainer id="body-weight" width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid stroke={GREY} vertical={true} horizontal={false} />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Line type="monotone" dataKey="bodyWeight" stroke="#00e0c0" dot />
            <Line type="monotone" dataKey="bodyFat" stroke="#f6c000" dot />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
