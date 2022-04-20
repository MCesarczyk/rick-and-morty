import { Flex, Heading } from "@chakra-ui/react";

type TitleProps = {
  title: string
}

const Headline = ({ title }: TitleProps) => (
  <Flex width="100%" justifyContent="center" background="#dadada" >
    <Heading as="h1" size="xl" my={6} px={12} data-testid="header">
      {title}
    </Heading>
  </Flex>
);

export default Headline;