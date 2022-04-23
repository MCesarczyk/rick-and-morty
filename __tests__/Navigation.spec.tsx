const { render, screen } = require("@testing-library/react");
import Navigation from "../components/Navigation";
import { subpages } from "../assets/subpages";

const setup = () => render(
  <Navigation
    subpages={subpages}
  />
);

test("Navigation should mount properly", () => {
  setup();

  const navigation = screen.getByRole('navigation');
  expect(navigation).toBeInTheDocument();
});

test("Navigation links should display proper subpages names", () => {
  setup();

  subpages.forEach((_, index) => {
    expect(screen.getByText(subpages[index].items)).toBeInTheDocument();
  });
});