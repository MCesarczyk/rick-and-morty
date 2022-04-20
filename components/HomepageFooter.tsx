import { Flex } from "@chakra-ui/react";

type footerProps = {
  date: number,
  title: string,
  link: string
}

const HomepageFooter = ({ date, title, link }: footerProps) => (
  <Flex
    as="footer"
    width="100%"
    justifyContent="center"
    py={6}
    background="#dadada"
    data-testid="footer"
  >
    {date}
    &nbsp;
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  </Flex>
);

export default HomepageFooter;