import React from 'react';
import {GlobalContainerStyles} from "./styled";

interface GlobalContainerProps {
    children: React.ReactNode;
}

export const GlobalContainer: React.FC<GlobalContainerProps> = ({children}) => {
    return (
        <GlobalContainerStyles>
            {children}
        </GlobalContainerStyles>
    );
};


