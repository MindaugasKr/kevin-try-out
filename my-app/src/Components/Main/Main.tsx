import React, { FunctionComponent } from 'react';
import Toolbar from "../Toolbar";
import ImageGrid from "../ImageGrid";

interface IMain {

}

const Main: FunctionComponent<IMain> = () => {
    return (
        <div>
            <ImageGrid/>
            <Toolbar/>
        </div>
    );
};

export default Main;
