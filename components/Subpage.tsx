import { Flex } from "@chakra-ui/react";
import Headline from "./Headline";
import SubpageFooter from "./SubpageFooter";

type subpageProps = {
  title: string
}

const Subpage = ({ title }: subpageProps) => (
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
);

export default Subpage;