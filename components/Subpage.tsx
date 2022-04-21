import { useSelector } from "react-redux";
import { selectCharactersList, selectState } from "../pages/charactersSlice";
import { API_BASE_URL } from "../assets/variables";
import { Flex } from "@chakra-ui/react";
import Headline from "./Headline";
import ItemsList from "./ItemsList";
import SubpageFooter from "./SubpageFooter";
import { useGetApiData } from "../utils/useGetApiData";

type subpageProps = {
  title: string,
  apiLocation: string
}

const Subpage = ({ title, apiLocation }: subpageProps) => {
  const apiUrl = `${API_BASE_URL + apiLocation}`;

  useGetApiData(apiUrl);

  const items = useSelector(selectCharactersList);
  const state = useSelector(selectState);

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