import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DEMO_DELAY } from "../assets/variables";
import { setCharactersList, setCharactersState } from "../pages/charactersSlice";
import { fetchApiData } from "./fetchApiData";

export const useGetApiData = (url: string) => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    dispatch(setCharactersState("loading"));
    const data = await fetchApiData(url);
    dispatch(setCharactersList(data));

    setTimeout(() => {
      dispatch(setCharactersState("success"));
    }, DEMO_DELAY);
  };

  useEffect(() => {
    getApiData();
  }, [url]);
};