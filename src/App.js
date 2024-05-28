import { useRoutes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import routers from './routes'

function App() {

  let routes = useRoutes(routers)
  return (
    routes
  );
}
export default App;
