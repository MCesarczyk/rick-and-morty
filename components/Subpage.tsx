import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectItemsInfo, selectItemsList, selectState } from "../itemsSlice";
import { useGetApiData } from "../utils/useGetApiData";
import { Center, Flex } from "@chakra-ui/react";
import Headline from "./Headline";
import ItemsList from "./ItemsList";
import Pager from "./Pager";
import SubpageFooter from "./SubpageFooter";
import SearchForm from "./SearchForm";
import { useRouter } from "next/router";
import { buildApiUrlString } from "../utils/buildApiUrlString";

type subpageProps = {
  title: string;
  initialApiUrl: string;
  topicQuery: string;
}

const Subpage = ({ title, initialApiUrl, topicQuery }: subpageProps) => {
  const [apiUrl, setApiUrl] = useState(initialApiUrl);
  const items = useSelector(selectItemsList);
  const info = useSelector(selectItemsInfo);
  const state = useSelector(selectState);
  const router = useRouter();

  const page = router?.query?.page;
  const query = router?.query?.name;

  useGetApiData(apiUrl, topicQuery);

  const onPageChange = (page: number) => {
    if (query !== undefined && query?.length > 0) {
      router.push({
        pathname: router.pathname,
        query: {
          page: page,
          name: query
        }
      });
    } else {
      router.push({
        pathname: router.pathname,
        query: {
          page: page
        }
      });
    }
  };

  const onQueryChange = (query: string) => {
    if (query.length > 0) {
      router.push({
        pathname: router.pathname,
        query: { name: query }
      });
    } else {
      router.push({
        pathname: router.pathname
      });
    }
  };

  useEffect(() => {
    const apiUrlString = buildApiUrlString(initialApiUrl, page, query);
    setApiUrl(apiUrlString);
  }, [router])

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
          <SearchForm
            // @ts-ignore: type mismatched
            query={router?.query?.name || ''}
            setQuery={onQueryChange}
          />
          {
            (items === undefined || items?.length === 0) ?
              <Center flexGrow={1} >
                NO RESULTS FOUND...
              </Center> :
              <>
                <ItemsList items={items} />
                <Pager
                  pages={info?.pages}
                  prev={info?.prev}
                  next={info?.next}
                  // @ts-ignore: type mismatched
                  page={page === undefined ? 1 : parseInt(page)}
                  setPage={onPageChange}
                />
              </>
          }
        </>
      )}
      <SubpageFooter />
    </Flex>
  )
};

export default Subpage;
