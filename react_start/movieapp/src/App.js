import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={ <Home />} />
      <Route path="/movie/:id" element={ <Detail />} />
      <Route path="/hello" element={ <h1>Hello</h1>} />
    </Route>
  )
);
  
function App() {
return <RouterProvider router={router} />;
}

export default App;