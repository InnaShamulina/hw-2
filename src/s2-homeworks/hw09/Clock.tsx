import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );

  const [show, setShow] = useState<boolean>(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setDate(new Date());
  //     }, 1000);

  //     // Clear the interval when the component unmounts
  //     return () => clearInterval(interval);
  //   }, []);
  const stop = () => {
    clearInterval(timerId);
    setTimerId(undefined);
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
  };

  const start = () => {
    stop();
    const id = +setInterval(() => {
      setDate(new Date());
    }, 1000);
    console.log(id);
    setTimerId(id);
  };

  // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
  // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

  const onMouseEnter = () => {
    setShow(true);
    // пишут студенты // показать дату если наведена мышка
  };
  const onMouseLeave = () => {
    setShow(false);
    // пишут студенты // спрятать дату если мышка не наведена
  };

  const stringTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(date) || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = Intl.DateTimeFormat("ru").format(date) || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date) || <br />; // пишут студенты
  const stringMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date) || <br />; // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <span>
              <span id={"hw9-month"}>{stringMonth}</span>,{" "}
              <span id={"hw9-date"}>{stringDate}</span>
            </span>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          Start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={timerId === undefined ? true : false} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          Stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
