import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { apiBaseUrl } from "../assets/links";
import Headline from "./Headline";
import SubpageFooter from "./SubpageFooter";

type subpageProps = {
  title: string,
  apiLocation: string
}

const Subpage = ({ title, apiLocation }: subpageProps) => {
  const apiUrl = `${apiBaseUrl + apiLocation}`;

useEffect(() => {
  console.log(apiUrl);
}, [title]);

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