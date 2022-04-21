import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCharactersList,
  selectState,
  setCharactersList,
  setCharactersState
} from "../pages/charactersSlice";
import { fetchApiData } from "../utils/fetchApiData";
import { API_BASE_URL, DEMO_DELAY } from "../assets/variables";
import { Flex } from "@chakra-ui/react";
import Headline from "./Headline";
import ItemsList from "./ItemsList";
import SubpageFooter from "./SubpageFooter";

type subpageProps = {
  title: string,
  apiLocation: string
}

const Subpage = ({ title, apiLocation }: subpageProps) => {
  const apiUrl = `${API_BASE_URL + apiLocation}`;
  const dispatch = useDispatch();
  const items = useSelector(selectCharactersList);
  const state = useSelector(selectState);

  const getApiData = async () => {
    dispatch(setCharactersState("loading"));
    const data = await fetchApiData(apiUrl);
    dispatch(setCharactersList(data));

    setTimeout(() => {
      dispatch(setCharactersState("success"));
    }, DEMO_DELAY);
  };

  useEffect(() => {
    getApiData();
  }, [apiLocation]);

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="space-between"
    >
      <main style={{ width: '100%' }}>
        <Headline
          title={title}
        />
      </main>
      {state === 'loading' && "LOADING"}
      {state === 'success' && <ItemsList items={items} />}
      <SubpageFooter />
    </Flex>
  )
};

export default Subpage;