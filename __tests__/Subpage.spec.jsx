const { render, screen } = require("@testing-library/react");
import { Provider } from "react-redux";
import store from "../store";
import Subpage from "../components/Subpage";

const setup = (title, apiLocation) => render(
  <Provider store={store}>
    <Subpage title={title} apiLocation={apiLocation} />
  </Provider>
);

test("Subpage should contain given title", () => {
  setup("Lorem Ipsum");

  const title = screen.getByText(/Lorem Ipsum/);
  expect(title).toBeInTheDocument();
});

test("Subpage should contain footer with link to main page", () => {
  setup("test", "#");

  const footerLink = screen.getByText(/<< BACK/);
  expect(footerLink).toBeInTheDocument();
});

test("Subpage should display loader immediately after component mounting with props", () => {
  setup("test", "#");

  const loader = screen.getByText(/LOADING/);
  expect(loader).toBeInTheDocument();
});