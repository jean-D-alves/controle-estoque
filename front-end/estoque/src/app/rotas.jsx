import Home from "./routes/home"
import NewProdut from "./routes/newProdut"
import {Routes, Route} from "react-router-dom"

export default function Rotas(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/new-produt" element={<NewProdut />}/>
        </Routes>
    )
}