import star from "../imgs/Star.png";

export default function Card(card) {
  let tagText;
  if (card.openSpots === 0) {
    tagText = "SOLD OUT";
  } else if (card.location === "Online") {
    tagText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="crdimg">
        <img className="cardImages" src={card.coverImg} />
        {tagText && <div className="tag">{tagText}</div>}
      </div>
      <div className="reviews">
        <img className="star" src={star} />
        <p className="rating">{card.stats.rating}</p>
        <p className="rating-num">({card.stats.reviewCount})</p>
        <div className="dot">&#183;</div>
        <div className="country">{card.location}</div>
      </div>
      <p className="cardTitle">{card.title}</p>
      <p className="price">From ${card.price}</p>
      <p className="prsn">/ person</p>
    </div>
  );
}
