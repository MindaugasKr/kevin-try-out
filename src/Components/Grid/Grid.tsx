import React, { FunctionComponent } from 'react';
import {TUNImage} from "../../state/reducers/reducer";
import Image from "./Image";

interface IGrid {
    images: TUNImage[];
}

const Grid: FunctionComponent<IGrid> = ({ images }) => (
    <div
        className="grid"
    >
        {Array.isArray(images) && images.map((image) => (
            <Image
                key={image.id}
                image={image}
            />
        ))}
    </div>
)

export default Grid;
