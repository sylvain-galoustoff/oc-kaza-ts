import style from "./Tag.module.scss";

type PropsType = {
  label: string;
};

function Tag({ label }: PropsType) {
  return <span className={style.tag}>{label}</span>;
}

export default Tag;
