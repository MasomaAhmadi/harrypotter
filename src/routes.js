import Home from "./pages/home/Home";
import Characters from "./pages/Characters/Characters";
import Serials from "./pages/Serials/Serials";  
import Groups from "./pages/Groups/Groups";
import exp from "./components/CharactersExp/CharactersExp";

let routers = [
  { path: "/", element: <Home /> },
  {
    path: "/characters/*",
    element: <Characters />,
    children: [
      { path: "0", element: <p>{exp[0]}</p> },
      { path: "1", element: <p>{exp[1]}</p> },
      { path: "2", element: <p>{exp[2]}</p> },
      { path: "3", element: <p>{exp[3]}</p> },
      { path: "4", element: <p>{exp[4]}</p> },
      { path: "5", element: <p>{exp[5]}</p> },
      { path: "6", element: <p>{exp[6]}</p> },
      { path: "7", element: <p>{exp[7]}</p> },
      { path: "8", element: <p>{exp[8]}</p> },
      { path: "9", element: <p>{exp[9]}</p> },
    ],
  },
  { path: "/Serials", element: <Serials /> },
  { path: "/Groups/:groupId", element: <Groups /> },
];

export default routers;