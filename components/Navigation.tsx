
import { Button, Flex, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link'

type navigationProps = {
  subpages: { id: number, items: string }[]
}

const Navigation = ({ subpages }: navigationProps) => (
  <Flex as="nav" p={12} justifyContent="center">
    <List spacing={8}>
      {subpages.map(page => (
        <ListItem key={page.id}>
          <Link href={`/${page.items}`}>
            <Button
              as="a"
              data-testid="navbutton"
              px={24}
              py={12}
              color="#fff"
              background="teal"
              fontSize={24}
              borderRadius={24}
              key={page.id}
            >
              {page.items}
            </Button>
          </Link>
        </ListItem>
      ))}
    </List>
  </Flex>
);

export default Navigation;