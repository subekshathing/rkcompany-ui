// import AuthGuard from "../guard/AuthGuard";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import ProductList from "../pages/ProductListPage/ProductList";
// import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import ProductDetail from "../pages/ProductDetails";
import EditProduct from "../pages/EditProduct";
import Cart from "../pages/Cart";
import BuyProductList from "../component/BuyProducts";
import About from "../pages/About";
import Service from "../pages/servicesPage/Service";
import ContactPage from "../pages/ContactPage";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "services",
        element: <Service />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "add-product",
        element: <AddProduct />
      },
      {
        path: "product-detail/:id",
        element: <ProductDetail />
      },
      {
        path: "product-edit/:id",
        element: <EditProduct />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "shop",
        element: <BuyProductList />
      },
      {
        path: "products",
        element: <ProductList />
      }
    ]
  }
];

export default mainRoutes;
