import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadingAC } from "./bll/loadingReducer";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import s2 from "../../s1-main/App.module.css";
import s from "./Loader.module.css";
import { Loader } from "./Loader";
import { AppStoreType } from "./bll/store";

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  const dispatch = useDispatch();
  // useSelector, useDispatch // пишет студент
  const isLoading = useSelector(
    (state: AppStoreType): {} => state.loading.isLoading
  );
  console.log(isLoading);

  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 1500);
    // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    // setTimeout
  };

  return (
    <div id={"hw10"}>
      <div className={s2.hwTitle}>Homework #10</div>

      <div className={s2.hw}>
        {isLoading ? (
          <div id={"hw10-loading"}>
            <Loader />
          </div>
        ) : (
          <SuperButton
            id={"hw10-button-start-loading"}
            onClick={setLoading}
            className={s.button}
          >
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
