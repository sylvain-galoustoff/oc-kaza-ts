import star from "../../../../assets/star-inactive.png";
import emptyStar from "../../../../assets/star-inactive.png";
import style from "./Rating.module.scss";

type PropsType = {
  rate: number;
};

function Rating({ rate }: PropsType) {
  const fullStars = [];
  for (let i = 1; i <= rate; i++) {
    fullStars.push(<img key={i} src={star} />);
  }

  const emptyStars = [];
  const emptyRate = 5 - rate;

  for (let i = 1; i <= emptyRate; i++) {
    emptyStars.push(<img key={i} src={emptyStar} />);
  }

  return (
    <div id={style.rating}>
      {fullStars}
      {emptyStars}
    </div>
  );
}

export default Rating;
