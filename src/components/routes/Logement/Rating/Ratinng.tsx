import star from "../../../assets/star-active.png";
import emptyStar from "../../../assets/star-inactive.png";

type PropsType = {
  rate: string;
};

function Rating({ rate }: PropsType) {
  const fullStars = [];
  for (let i = 1; i <= Number(rate); i++) {
    fullStars.push(<img key={i} src={star} />);
  }

  const emptyStars = [];
  const emptyRate = 5 - Number(rate);

  for (let i = 1; i <= emptyRate; i++) {
    emptyStars.push(<img key={i} src={emptyStar} />);
  }

  return (
    <div id="rating">
      {fullStars}
      {emptyStars}
    </div>
  );
}

export default Rating;
