import { render, unmountComponentAtNode } from "react-dom";
const { act, fireEvent } = require("@testing-library/react");
import Pager from "../components/Pager";

let container: any = null;
let onPageSwitchMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onPageSwitchMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Counter should display proper page and total pages", () => {
  act(() => {
    render(<Pager page={4} pages={12} prev={""} next={""} setPage={() => { }} />, container);
  });
  expect(container.querySelector('[data-testid="counter"]')?.textContent).toBe("Page 4 / 12");
});

test("All buttons should be active when not on first or last page", () => {
  act(() => {
    render(<Pager prev="#" next="#" pages={0} page={0} setPage={() => { }} />, container);
  });
  expect(container.querySelector('[data-testid="first"]')).not.toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="previous"]')).not.toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="next"]')).not.toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="last"]')).not.toHaveAttribute('disabled');
});

test("First and previous button should be inactive on first page", () => {
  act(() => {
    render(<Pager prev={null} next="#" pages={0} page={0} setPage={() => { }} />, container);
  });
  expect(container.querySelector('[data-testid="first"]')).toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="previous"]')).toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="next"]')).not.toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="last"]')).not.toHaveAttribute('disabled');
});

test("Next and last button should be inactive on last page", () => {
  act(() => {
    render(<Pager prev="#" next={null} pages={0} page={0} setPage={() => { }} />, container);
  });
  expect(container.querySelector('[data-testid="first"]')).not.toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="previous"]')).not.toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="next"]')).toHaveAttribute('disabled');
  expect(container.querySelector('[data-testid="last"]')).toHaveAttribute('disabled');
});

test("Pager should increase page number after clicking next button", () => {
  act(() => {
    render(<Pager page={5} setPage={onPageSwitchMock} pages={0} prev={""} next={""} />, container);
  });
  fireEvent.click(container.querySelector('[data-testid="next"]'));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(1);
  expect(onPageSwitchMock).toHaveBeenCalledWith(6);
});

test("Pager should decrease page number after clicking previous button", () => {
  act(() => {
    render(<Pager page={5} setPage={onPageSwitchMock} pages={0} prev={""} next={""} />, container);
  });
  fireEvent.click(container.querySelector('[data-testid="previous"]'));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(1);
  expect(onPageSwitchMock).toHaveBeenCalledWith(4);
});

test("Pager should return first page after clicking first button", () => {
  act(() => {
    render(<Pager page={5} setPage={onPageSwitchMock} pages={0} prev={""} next={""} />, container);
  });
  fireEvent.click(container.querySelector('[data-testid="first"]'));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(1);
  expect(onPageSwitchMock).toHaveBeenCalledWith(1);
});

test("Pager should return last page number after clicking last button", () => {
  act(() => {
    render(<Pager page={5} pages={21} setPage={onPageSwitchMock} prev={""} next={""} />, container);
  });
  fireEvent.click(container.querySelector('[data-testid="last"]'));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(1);
  expect(onPageSwitchMock).toHaveBeenCalledWith(21);
});