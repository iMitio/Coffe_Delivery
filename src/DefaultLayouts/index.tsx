import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { LayoutsContainer } from "./styles";

export function DefaultLayouts () {
   return (
    <LayoutsContainer>
        <Header />
    
        <Outlet />
    </LayoutsContainer>
   )
}