import React, { FunctionComponent } from 'react';
import {useSelector} from "react-redux";
import Grid from "../Grid";
import {TState} from "../../state/reducers/reducer";

const LikedPage: FunctionComponent = ( ) => {
    const { likedImages } = useSelector((state: TState) => state);

    return (
        <Grid
            images={Array.from(likedImages, ([, image]) => image)}
        />
    );
};

export default LikedPage;
