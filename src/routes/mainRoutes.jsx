// import AuthGuard from "../guard/AuthGuard";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import ProductList from "../pages/ProductListPage/ProductList";
// import About from "../pages/About";
// import AddProduct from "../pages/AddProduct";
// import Cart from "../pages/Cart";
// import DatePickerForm from "../pages/DatePickerForm";
// import EditProduct from "../pages/EditProduct";
// import Home from "../pages/HomePage/Home";
// import ProductDetail from "../pages/ProductDetail";

const mainRoutes = [
  {
    path: "/",
    element: (
      // <AuthGuard>
      //   <MainLayout />
      // </AuthGuard>
      <MainLayout />
    ),
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "products",
        element: <ProductList />
      }
      // {
      //   path: "about",
      //   element: <About />
      // },
      // {
      //   path: "add-product",
      //   element: <AddProduct />
      // },
      // {
      //   path: "product-detail/:id",
      //   element: <ProductDetail />
      // },
      // {
      //   path: "product-edit/:id",
      //   element: <EditProduct />
      // },
      // {
      //   path: "cart",
      //   element: <Cart />
      // },
      // { path: "date-picker", element: <DatePickerForm /> }
    ]
  }
];

export default mainRoutes;
