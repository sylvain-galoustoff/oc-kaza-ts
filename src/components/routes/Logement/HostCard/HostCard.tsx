import style from "./HostCard.module.scss";

type PropsType = {
  host: {
    name: string;
    picture: string;
  };
};

function HostCard({ host }: PropsType) {
  const firstname = host.name.split(" ")[0];
  const lastname = host.name.split(" ")[1];

  return (
    <div id={style.hostCard}>
      <div className={style.name}>
        <p>{firstname}</p>
        <p>{lastname}</p>
      </div>
      <div className={style.avatar}>
        <img
          src={host.picture}
          alt={`photo de ${host.name}`}
          className="responsive"
        />
      </div>
    </div>
  );
}

export default HostCard;
