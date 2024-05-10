import logements from "../../../data/logements";
import Jumbo from "../../common/Jumbo/Jumbo";

function Home() {
  // const renderCards = logements.map((item) => (
  //   <LogementCard key={item.id} data={item} />
  // ));
  return (
    <div className="page container" id="home">
      <Jumbo />
      {/* <div id="logements-list">{renderCards}</div> */}
    </div>
  );
}

export default Home;
