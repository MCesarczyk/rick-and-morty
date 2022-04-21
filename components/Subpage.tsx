import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAPIData } from "../assets/fetchApiData";
import { apiBaseUrl } from "../assets/links";
import { setCharactersList } from "../pages/charactersSlice";
import Headline from "./Headline";
import SubpageFooter from "./SubpageFooter";

type subpageProps = {
  title: string,
  apiLocation: string
}

const Subpage = ({ title, apiLocation }: subpageProps) => {
  const apiUrl = `${apiBaseUrl + apiLocation}`;
  const dispatch = useDispatch();

  const getApiData = async () => {
    const data = await fetchAPIData(apiUrl);
    dispatch(setCharactersList(data));
  };

  useEffect(() => {
    getApiData();
  }, [apiLocation]);

  return (
    <Flex
      direction="column"
      height="100vh"
      alignItems="center"
      justifyContent="space-between"
    >
      <main style={{ width: '100%' }}>
        <Headline
          title={title}
        />
      </main>

      <SubpageFooter />
    </Flex>
  )
};

export default Subpage;