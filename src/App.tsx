import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import ContactDetail from "./Pages/ContactDetail";
import Playlists from "./Pages/Playlists/Playlists";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/introduce",
      element: <Introduce />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/contact/:id",
      element: <ContactDetail />,
    },
    {
      path: "/playlists",
      element: <Playlists />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="bg-black">
      <div className="max-w-[1500px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
