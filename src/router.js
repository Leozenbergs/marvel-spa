import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Base from './layouts/base'
import Home from "./views/home/Index";
import Character from "./views/character/Index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/marvel-spa/' element={<Base />}>
          <Route path='characters' element={<Home />} />
          <Route path="characters/:characterId" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;