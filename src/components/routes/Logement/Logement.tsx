import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logements from "../../../data/logements";
import Slider from "./Slider/Slider";
import { LogementType } from "../../../data/LogementType";
import Tag from "./Tag/Tag";
import Rating from "./Rating/Ratinng";
import style from "./Logement.module.scss";

function Logement() {
  const params = useParams();
  const [logement, setLogement] = useState<LogementType>({
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: {
      name: "",
      picture: "",
    },
    rating: "",
    location: "",
    equipments: [],
    tags: [],
  });

  useEffect(() => {
    const currentLogement = logements.filter(
      (logement) => logement.id === params.id
    );
    console.log(currentLogement);

    if (!currentLogement.length) {
      console.error("Aucun logement avec l'id " + params.id);
    } else if (currentLogement.length !== 1) {
      console.error("Plusieurs logement avec le même id  " + params.id);
    } else {
      setLogement(currentLogement[0]);
    }
  }, [params]);

  const renderTags = logement.tags.map((tag) => <Tag key={tag} label={tag} />);

  return (
    <div className="page container" id={style.logement}>
      <Slider pictures={logement.pictures} />

      <div id={style.logementHeader}>
        <div id={style.logementData}>
          <h1 className={style.title}>{logement.title}</h1>
          <p className={style.location}>{logement.location}</p>
          <div id={style.tags}>{renderTags}</div>
        </div>

        <div id={style.hostData}>
          <Rating rate={logement.rating} />
          {/* <HostCard host={logement.host} /> */}
        </div>
      </div>
    </div>
  );
}

export default Logement;
