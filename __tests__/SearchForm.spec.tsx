import { render, unmountComponentAtNode } from "react-dom";
const { screen, act, fireEvent, waitFor } = require("@testing-library/react");
import SearchForm from "../components/SearchForm";

let container: any = null;
let onSearchSubmitMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onSearchSubmitMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Search form should mount properly", () => {
  act(() => {
    render(<SearchForm query="" setQuery={() => { }} />, container);
  });

  expect(container.querySelector('[data-testid="search"]')).toBeInTheDocument();
});

test("Search form should have proper label", () => {
  act(() => {
    render(<SearchForm query="" setQuery={() => { }} />, container);
  });

  expect(screen.getByText(/Search by name/)).toBeInTheDocument();
});

test("Submit button should render proper text", () => {
  act(() => {
    render(<SearchForm query="" setQuery={() => { }} />, container);
  });

  expect(screen.getByText(/Filter/)).toBeInTheDocument();
});

test("Button should send query after click", async () => {
  act(() => {
    render(<SearchForm query="test" setQuery={onSearchSubmitMock} />, container);
  });

  fireEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(onSearchSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSearchSubmitMock).toHaveBeenCalledWith("test");
  });
});

test("Button should clear query after sending empty string", async () => {
  act(() => {
    render(<SearchForm query="" setQuery={onSearchSubmitMock} />, container);
  });

  fireEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(onSearchSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSearchSubmitMock).toHaveBeenCalledWith("");
  });
});