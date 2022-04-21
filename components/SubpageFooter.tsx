import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const SubpageFooter = () => (
  <Flex
    as="footer"
    width="100%"
    justifyContent="center"
    py={6}
    background="#dadada"
    data-testid="footer"
  >
    <Link data-testid="footer-link" href={'/'}>
      <a>
        {'<< BACK'}
      </a>
    </Link>
  </Flex>
);

export default SubpageFooter;