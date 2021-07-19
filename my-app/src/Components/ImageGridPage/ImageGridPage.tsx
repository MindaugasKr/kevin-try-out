import React, {FunctionComponent, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getImages } from "../../state/actions/actions";
import Image from "../Image";

interface IImageGrid {

}

const ImageGridPage: FunctionComponent<IImageGrid> = () => {
    // @ts-ignore // TODO: state fix type
    const { images } = useSelector(state => state);

    console.log(images)

    useEffect(() => {
        // @ts-ignore // TODO: state fix type
        if (!images) {
            getImages();
        }
    }, [])

    return (
        <div>
            {Array.isArray(images) && images.map(({ alt_description: altDescription, id, urls }) => (
                <Image
                    key={id}
                    src={urls.thumb}
                    alt={altDescription}
                />
            ))}
        </div>
    );
};

export default ImageGridPage;
