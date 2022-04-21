const { render, screen } = require("@testing-library/react");
import ItemsList from "../components/ItemsList";

const mock = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    city: "LA"
  },
  {
    id: 2,
    name: "Mary",
    Surname: "Jane",
    city: "NY"
  }
];

const queries = ['John', 'Doe', 'LA', 'Mary', 'Jane', 'NY'];

const setup = (items) => render(
  <ItemsList items={items} />
);

test("ItemsList should be mounted successfuly", () => {
  setup([]);

  const list = screen.getByTestId("items-list");
  expect(list).toBeInTheDocument();
});

test("ItemsList should contain empty table", () => {
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