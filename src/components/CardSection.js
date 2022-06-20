import Card from "./Card";
import data from "../data.js";

export default function CardSection() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });
  return <div className="cardSection">{cards}</div>;
}
