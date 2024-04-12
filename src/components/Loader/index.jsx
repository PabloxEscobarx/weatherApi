import s from "./styles.module.css";

export const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.loader}></div>
    </div>
  );
};
