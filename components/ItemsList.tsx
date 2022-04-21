import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

type itemsListProps = {
  items: { key1: string, key2: string, key3: string }[]
}

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