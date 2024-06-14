import MinimumLayout from "../layout/MinimumLayout.jsx";
import Home from "../pages/HomePage/Home.jsx";
import Login from "../pages/LoginPage/Login.jsx";
import Register from "../pages/RegisterPage/Register.jsx";

// import GuestGuard from "../guard/GuestGuard.jsx";

const guestRoutes = [
  {
    path: "/",
    element: (
      // <GuestGuard>
      //   <MinimumLayout />
      // </GuestGuard>
      <MinimumLayout />
    ),
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }
];

export default guestRoutes;
