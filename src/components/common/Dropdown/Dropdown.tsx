import chevron from "../../../assets/chevron.png";
import { useState } from "react";
import style from "./Dropdown.module.scss";

type PropsType = {
  label: string;
  data: string | string[];
};

function Dropdown({ label, data }: PropsType) {
  const [isClosed, setIsClosed] = useState(true);

  let formatedData;
  if (Array.isArray(data)) {
    formatedData = data.map((item) => <p key={item}>{item}</p>);
  } else {
    formatedData = data;
  }

  return (
    <div className={`${style.dropdown} ${isClosed ? style.close : style.open}`}>
      <div
        className={style.dropdownHeader}
        onClick={() => setIsClosed(!isClosed)}
      >
        <span>{label}</span>
        <img src={chevron} alt="Icone chevron" className={style.chevron} />
      </div>
      <div className={style.dropdownBody}>{formatedData}</div>
    </div>
  );
}

export default Dropdown;
