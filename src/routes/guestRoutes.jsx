import MinimumLayout from "../layout/MinimumLayout.jsx";
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
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
];

export default guestRoutes;
