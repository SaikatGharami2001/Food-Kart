import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ShimmerUI from "./Components/ShimmerUI";

const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Header = lazy(() => import("./Components/Header"));
const Body = lazy(() => import("./Components/Body"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => (
  <Suspense fallback={<ShimmerUI />}>
    <RouterProvider router={router} />;
  </Suspense>
);

export default App;
