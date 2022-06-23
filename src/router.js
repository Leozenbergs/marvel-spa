import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Base from './layouts/base'
import Home from "./views/home/Index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;