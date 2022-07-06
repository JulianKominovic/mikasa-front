import dayjs from "dayjs";
import LOCALE from "../utils/LOCALE";
import "./DateTime.css";
import { useEffect, useState } from "preact/hooks";

const DateTime = () => {
  const [DAYJS, setDayjs] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => {
      setDayjs((prev) => prev.add(1, "seconds"));
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h4>{DAYJS.format("HH:mm")}</h4>
      <small>
        {DAYJS.get("date")} de {LOCALE.months[DAYJS.get("month")]} de{" "}
        {DAYJS.get("years")}
      </small>
    </>
  );
};

export default DateTime;
