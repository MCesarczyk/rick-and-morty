import { useState } from "react";
import { useSelector } from "react-redux";
import { selectItemsInfo, selectItemsList, selectState } from "../pages/itemsSlice";
import { useGetApiData } from "../utils/useGetApiData";
import { Flex } from "@chakra-ui/react";
import Headline from "./Headline";
import ItemsList from "./ItemsList";
import Pager from "./Pager";
import SubpageFooter from "./SubpageFooter";

type subpageProps = {
  title: string,
  initialApiUrl: string
}

const Subpage = ({ title, initialApiUrl }: subpageProps) => {
  const [apiUrl, _] = useState(initialApiUrl);

  useGetApiData(apiUrl);

  const items = useSelector(selectItemsList);
  const info = useSelector(selectItemsInfo);
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
      {state === 'success' && (
        <>
          <ItemsList items={items} />
          <Pager
            pages={info?.pages}
            prev={info?.prev}
            next={info?.next}
          />
        </>
      )}
      <SubpageFooter />
    </Flex>
  )
};

export default Subpage;