const { render, screen } = require("@testing-library/react");
import ItemsList from "../components/ItemsList";

type itemsListProps = {
  id: number,
  name: string,
  status: string,
  species: string
}[]

type mockType = {
  id: number,
  name: string,
  status: string,
  species: string
}[]

const mock: mockType = [
  {
    id: 1,
    name: "Xyz Qwerty",
    status: "Dead",
    species: "Alien"
  },
  {
    id: 2,
    name: "Mary Jane",
    status: "Alive",
    species: "Human"
  }
];

const queries = ['Xyz Qwerty', 'Dead', 'Alien', 'Mary Jane', 'Alive', 'Human'];

const setup = (items: itemsListProps) => render(
  <ItemsList items={items} />
);

test("ItemsList should be mounted successfuly", () => {
  setup([]);

  const list = screen.getByTestId("items-list");
  expect(list).toBeInTheDocument();
});

test("ItemsList should contain empty table when no data passing", () => {
  setup([]);

  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();

  const tableCell = screen.queryByRole('cell');
  expect(tableCell).not.toBeInTheDocument();
});

test("ItemsList should display mocked data", () => {
  setup(mock);

  queries.forEach(query => {
    expect(screen.getByText(query)).toBeInTheDocument();
  });
});