import React from 'react';
import {GlobalContainer} from "./layout/GlobalContainer";
import {Aside} from "./layout/Aside";
import {Main} from "./layout/Main";

const App: React.FC = () => {
    return (
        <GlobalContainer>
            <Aside/>
            <Main/>
        </GlobalContainer>
    );
}
export default App;
