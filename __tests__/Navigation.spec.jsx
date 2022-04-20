const { render, screen } = require("@testing-library/react");
import Navigation from "../components/Navigation";
import { subpages } from "../assets/subpages";

const setup = () => render(
  <Navigation
    subpages={subpages}
  />
);

test("Navigation should be in document", () => {
  setup();

  const navigation = screen.getByRole('navigation');
  expect(navigation).toBeInTheDocument();
});

test("Navigation should link to proper subpages", () => {
  setup();

  subpages.forEach((_, index) => {
    expect(screen.getByText(subpages[index].items)).toBeInTheDocument();
  });
});