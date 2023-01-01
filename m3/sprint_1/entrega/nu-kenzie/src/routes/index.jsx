import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { InitialPage } from "../pages/InitialPage";

export function PrincipalRoutes () {
    return (
        <Routes>
            <Route path="/" element={<InitialPage/>}/>
            <Route path="/homePage" element={<HomePage/>}/>
        </Routes>
    )
}