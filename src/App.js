import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import EntryDetailPage from "./pages/EntryDetailPage";
import RootLayout from "./pages/Root";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/entry-detail", element: <EntryDetailPage /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
