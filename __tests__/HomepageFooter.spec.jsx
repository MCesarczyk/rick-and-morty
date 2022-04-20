const { render, screen } = require("@testing-library/react");
import HomepageFooter from "../components/HomepageFooter";

const setup = () => render(
  <HomepageFooter
    date={1998}
    title="John Doe"
    link="www.example.com"
  />
);

test("Footer should be in document", () => {
  setup();

  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

test("Footer link should display given date", () => {
  setup();

  const date = screen.getByText(/1998/i);
  expect(date).toBeInTheDocument();
});

test("Footer link should display proper title", () => {
  setup();

  const title = screen.getByText(/John Doe/i);
  expect(title).toBeInTheDocument();
});

test("Footer link should have proper url", () => {
  setup();

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', 'www.example.com');
});