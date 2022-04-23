import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

type charactersList = {
  items: {
    id: number,
    name: string,
    status: string,
    species: string
  }[]
}

type locationsList = {
  items: {
    id: number,
    name: string,
    type: string,
    dimension: string
  }[]
}

type episodesList = {
  items: {
    id: number,
    name: string,
    air_date: string,
    episode: string
  }[]
}

type itemsListProps = charactersList | locationsList | episodesList;

const ItemsList = ({ items }: itemsListProps) => (
  <TableContainer data-testid="items-list">
    <Table variant='striped'>
      <Thead>
        <Tr>
          {items.length > 0 && Object.keys(items[0]).splice(1, 3).map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {items?.map((item, index) => (
          <Tr key={index}>
            {Object.values(item).splice(1, 3).map((value, index) => (
              <Td key={index}>{value}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default ItemsList;