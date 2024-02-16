import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./tailwind.css";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import GaleryDetails from "./pages/GaleryDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      path:'galery',
      element:<Otherlayout/>,
      children: [
      {index:true, element: <Galery /> },
      { path: ":productId", element: <GaleryDetails /> },
      { path: "new", element: <NewGaleryDetails /> },
      { path: ":productId/edit", element: <GaleryDetailsEdit /> },
      
      ]
    ],
  },
]);
//  FONTOS HA ELHAGYOD A / JELET A CHILDRENNÉL REALTIVE PATH LESZ ÍGY MEG ABSZULÚT TEHÁT  ELÉ KELL ÍRNI AMI A PARENTBEN VAN!!!!!!!!!!!!!!!
//  path: "/route", /galery >> abszolút
// path:/route, galery >> relatív
// linkeknél ugyanez a szabály van!!!!!!!!!!!
// egyből a domain név után ha előtte van egy per jel
// és ha nincs előtte per jel akkor a jelenlegi aktív path után rakja
// ezek most siblingek tehát mindkettena  a gyökérhez tartoznak
// és van ez a speciális Link to=".." >> eggyel feljebb szóval mindkettő a gyökérhez vezet
// de ha egymásba vannak ágyazva akkor csak az előzőhöz vezet és utána a gyökérhez
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;