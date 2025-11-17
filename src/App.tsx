import { createBrowserRouter, RouterProvider } from "react-router";
import { LayoutRoot } from "./components/layout/layout-root";
import { HomePage } from "./routes/home";
import { JewelleryListingPage } from "./routes/jewellery/listing";
import { JewelleryDetailPage } from "./routes/jewellery/detail";
import { CandlesListingPage } from "./routes/candles/listing";
import { CandleDetailPage } from "./routes/candles/detail";
import { CartPage } from "./routes/cart";
import { CheckoutPage } from "./routes/checkout";
import { AboutPage } from "./routes/about";
import { ContactPage } from "./routes/contact";
import { PoliciesPage } from "./routes/policies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "jewellery",
        element: <JewelleryListingPage />,
      },
      {
        path: "jewellery/:slug",
        element: <JewelleryDetailPage />,
      },
      {
        path: "candles",
        element: <CandlesListingPage />,
      },
      {
        path: "candles/:slug",
        element: <CandleDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "policies",
        element: <PoliciesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
