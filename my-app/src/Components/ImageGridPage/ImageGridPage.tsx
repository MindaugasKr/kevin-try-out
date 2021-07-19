import React, {FunctionComponent, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getImages } from "../../state/actions/actions";
import Grid from "../Grid/Grid";

const ImageGridPage: FunctionComponent = () => {
    // @ts-ignore // TODO: state fix type
    const { images } = useSelector(state => state);

    useEffect(() => {
        // @ts-ignore // TODO: state fix type
        if (!images) {
            getImages();
        }
    }, [])

    return (
        <Grid
            images={images}
        />
    );
};

export default ImageGridPage;
