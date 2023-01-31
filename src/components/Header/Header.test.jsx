import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { store } from "../../redux/store";
import Header from "./Header";
import About from "../../pages/About";
import Rent from "../../pages/Rent";
import Delivery from "../../pages/Delivery";
import WhereToRide from "../../pages/WhereToRide";
import Contacts from "../../pages/Contacts";
import SignIn from "../../pages/SignIn";

describe("Header link test", () => {
  test("test about link", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("test rent link", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
          <Routes>
            <Route path="/rent" element={<Rent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const rentLink = screen.getByTestId("rent-link");
    userEvent.click(rentLink);
    expect(screen.getByTestId("rent-page")).toBeInTheDocument();
  });

  test("test delivery link", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
          <Routes>
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const deliveryLink = screen.getByTestId("delivery-link");
    userEvent.click(deliveryLink);
    expect(screen.getByTestId("delivery-page")).toBeInTheDocument();
  });

  test("test wheretoride link", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
          <Routes>
            <Route path="/wheretoride" element={<WhereToRide />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const wheretorideLink = screen.getByTestId("wheretoride-link");
    userEvent.click(wheretorideLink);
    expect(screen.getByTestId("wheretoride-page")).toBeInTheDocument();
  });

  test("test contacts link", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
          <Routes>
          <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const contactsLink = screen.getByTestId("contacts-link");
    userEvent.click(contactsLink);
    expect(screen.getByTestId("contacts-page")).toBeInTheDocument();
  });
});
