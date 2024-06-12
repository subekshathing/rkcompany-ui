import MinimumLayout from "../layout/MinimumLayout.jsx";
// import Register from "../pages/Register";
// import Login from "../pages/Login.jsx";
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
      // {
      //   path: "login",
      //   element: <Login />
      // }
      // {
      //   path: "register",
      //   element: <Register />
      // }
    ]
  }
];

export default guestRoutes;
