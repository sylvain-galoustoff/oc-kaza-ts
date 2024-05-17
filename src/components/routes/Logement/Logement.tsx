import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logements from "../../../data/logements";
import Slider from "./Slider/Slider";
import { LogementType } from "../../../data/LogementType";
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

  return (
    <div className="page container" id={style.logement}>
      <Slider pictures={logement.pictures} />
    </div>
  );
}

export default Logement;
