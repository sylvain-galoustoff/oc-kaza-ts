import { Link } from "react-router-dom";
import { LogementType } from "../../../data/LogementType";
import style from "./LogementCard.module.scss";

function LogementCard({ data }: { data: LogementType }) {
  return (
    <Link to={`/logement/${data.id}`} className={style.card}>
      <img src={data.cover} alt={data.title} />
      <div className={style.layer}>
        <h2 className={style.cardTitle}>{data.title}</h2>
      </div>
    </Link>
  );
}

export default LogementCard;
