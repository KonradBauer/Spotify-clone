import React from "react";
import {Home, Library, Search, StyledAside, StyledLogo} from "./styled";


export const Aside: React.FC = () => {
    return (
        <StyledAside>
            <StyledLogo/>
            <Home/>
            <Search/>
            <Library/>
        </StyledAside>
    )
}