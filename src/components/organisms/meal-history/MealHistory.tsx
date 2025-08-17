import ImageWithTitle from "../../atoms/imageWithTitle/ImageWithTitle";

interface Props {
  mealHistory: {
    img: string;
    label: string;
  }[];
}

export const MealHistory = (props: Props) => {
  const { mealHistory = [] } = props;

  return (
    <div style={Container}>
      {mealHistory.map((meal, i) => (
        <ImageWithTitle key={`${i}`} image={meal.img} title={meal.label} />
      ))}
    </div>
  );
};

const Container = {
  display: "flex",
  width: 1280,
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: 28,
} as const;
