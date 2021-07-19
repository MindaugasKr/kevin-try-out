import React, {FunctionComponent, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getImages } from "../../state/actions/actions";
import Grid from "../Grid/Grid";
import {TState} from "../../state/reducers/reducer";

const ImageGalleryPage: FunctionComponent = () => {
    const { images } = useSelector((state: TState) => state);

    useEffect(() => {
        if (!images) {
            getImages();
        }
    }, [])

    if (!images) {
        return null;
    }

    return (
        <Grid
            images={images}
        />
    );
};

export default ImageGalleryPage;
