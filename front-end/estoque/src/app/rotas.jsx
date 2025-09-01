import Home from "./routes/home";
import NewProdut from "./routes/newProdut";
import Singup from "./routes/singup";
import Singin from "./routes/singin";
import DeleteProd from "./routes/deleteProdut";
import SeeStock from "./routes/seeStock";
import { Routes, Route } from "react-router-dom";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-produt" element={<NewProdut />} />
      <Route path="/login/singup" element={<Singup />} />
      <Route path="/login/singin" element={<Singin />} />
      <Route path="/get-stock" element={<SeeStock />} />
      <Route path="/delete-produt" element={<DeleteProd />} />

    </Routes>
  );
}
