import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./tailwind.css";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/galery", element: <Galery /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
/*
{
  path: "/admin",
  element: <Root2 />,
  children: [
    { path: "admin/gdfgfd", element: <Hoze /> },
  
  ],
},*/

/* <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white font-semibold text-lg">Weboldal neve</a>
        </div>
        <div className="hidden md:block">
          <a href="/" className="text-white mr-4">Főoldal</a>
          <a href="/" className="text-white mr-4">Szolgáltatások</a>
          <a href="/" className="text-white mr-4">Rólunk</a>
          <a href="/" className="text-white mr-4">Kapcsolat</a>
        </div>
        <div className="md:hidden">
       
          </div>
          </div>
        </nav> */
/*   <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */