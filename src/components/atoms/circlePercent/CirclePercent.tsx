interface CirclePercentProps {
  percent: number;
  date: string;
}

export const CirclePercent = ({ percent, date }: CirclePercentProps) => {
  const size = 150;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const visiblePercent = 100 - percent;
  const offset = circumference - (visiblePercent / 100) * circumference;

  const containerStyle = {
    position: "relative",
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;

  const textStyle = {
    position: "absolute",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    gap: "6px",
    alignItems: "center",
  } as const;

  return (
    <div style={containerStyle}>
      <svg width={size} height={size} style={{ transform: "rotate(270deg)" }}>
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ opacity: 0.3 }}
        />
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <div style={textStyle}>
        <span>{date}</span>
        <span>{visiblePercent}%</span>
      </div>
    </div>
  );
};
