const { render, screen } = require("@testing-library/react");
import SubpageFooter from "../components/SubpageFooter";

const setup = () => render(
  <SubpageFooter />
);

test("Footer should mount properly", () => {
  setup();

  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

test("Footer link should display proper text", () => {
  setup();

  const title = screen.getByText(/<< back/i);
  expect(title).toBeInTheDocument();
});

test("Footer link should point to home page", () => {
  setup();

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/');
});