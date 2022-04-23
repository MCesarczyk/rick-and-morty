const { render, screen } = require("@testing-library/react");
import Headline from "../components/Headline";

const setup = () => render(
  <Headline
    title="John Doe"
  />
);

test("Headline should mount properly", () => {
  setup();

  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
});

test("Headline should display proper title", () => {
  setup();

  const title = screen.getByText(/John Doe/i);
  expect(title).toBeInTheDocument();
});