import { ButtonWithImage } from "../../atoms";
import knife from "../../../assets/images/icon_knife.png";
import coffee from "../../../assets/images/coffee-15.png";
import { MEAL_TYPE } from "../../../constants";

export const FilterButton = ({
  onFilter,
}: {
  onFilter: (type: string) => void;
}) => {
  return (
    <div style={ContainerStyle}>
      <ButtonWithImage
        onClick={() => onFilter(MEAL_TYPE.all)}
        image={knife}
        title="All"
      />
      <ButtonWithImage
        onClick={() => onFilter(MEAL_TYPE.morning)}
        image={knife}
        title="Morning"
      />
      <ButtonWithImage
        onClick={() => onFilter(MEAL_TYPE.lunch)}
        image={knife}
        title="Lunch"
      />
      <ButtonWithImage
        onClick={() => onFilter(MEAL_TYPE.dinner)}
        image={knife}
        title="Dinner"
      />
      <ButtonWithImage
        onClick={() => onFilter(MEAL_TYPE.snack)}
        image={coffee}
        title="Snack"
      />
    </div>
  );
};

const ContainerStyle = {
  padding: 25,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%",
} as const;
