import { Yummy } from "components/Yummy";
import { Route, Routes } from "react-router";
import { Login } from "components/Login";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { StarWars } from "pages/StarWars";

export function WebsiteRouting() {
  return (
    <Routes>
      <Route path="/Yummy" element={<Yummy />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/starwars/:peopleID" element={<StarWars />} />
    </Routes>
  );
}
