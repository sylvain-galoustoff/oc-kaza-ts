import logements from "../../../data/logements";
import Jumbo from "../../common/Jumbo/Jumbo";
import LogementCard from "./LogementCard";
import style from "./LogementCard.module.scss";

function Home() {
  const renderCards = logements.map((item) => (
    <LogementCard key={item.id} data={item} />
  ));
  return (
    <div className="page container" id="home">
      <Jumbo />
      <div id={style.logementsList}>{renderCards}</div>
    </div>
  );
}

export default Home;
