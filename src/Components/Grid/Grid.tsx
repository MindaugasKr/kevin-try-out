import React, { FunctionComponent } from 'react';
import {TUNImage} from "../../state/reducers/reducer";
import Image from "../Image";

interface IGrid {
    images: TUNImage[];
}

const Grid: FunctionComponent<IGrid> = ({ images }) => (
    <div
        className="grid"
    >
        {Array.isArray(images) && images.map(({ alt_description: altDescription, id, urls }) => (
            <Image
                key={id}
                id={id}
                src={urls.thumb}
                alt={altDescription}
            />
        ))}
    </div>
)

export default Grid;
