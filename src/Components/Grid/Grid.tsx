import React, {FunctionComponent, useEffect, useMemo, useState} from 'react';
import {TUNImage} from "../../state/reducers/reducer";
import Image from "./Image";

interface IGrid {
    images: TUNImage[];
}

type TColumns = TUNImage[][];

const getColumnCount = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
        return 5;
    } else if (width >= 768) {
        return 4;
    } if (width >= 576) {
        return 3;
    }

    return 2;
}

const Grid: FunctionComponent<IGrid> = ({ images }) => {
    const [columnCount, setColumnCount] = useState(getColumnCount());

    useEffect(() => {
        const listener = () => {
            const newColumnCount = getColumnCount();

            if (newColumnCount !== columnCount) {
                setColumnCount(newColumnCount);
            }
        };

        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [columnCount]);

    const imagesAreValid = Array.isArray(images) && images.length;

    const imagesColumn = useMemo(() => {
        if (!imagesAreValid) {
            return [];
        }

        const columns: TColumns = [];

        // Add exact amount to prevent columns with images from stretching.
        for (let index = 0; index < columnCount; index++) {
            columns.push([]);
        }

        images.forEach((image, index) => {
            const columnNumber = index % columnCount;
            columns[columnNumber].push(image);
        })

        return columns;
    }, [columnCount]);

    return (
        <div
            className="grid"
        >
            {imagesColumn.map((column, index) => (
                <div
                    className={`grid__column ${index % 2 ? 'grid__column--first-small' : 'grid__column--first-big'}`}
                >
                    {column.map((image) => (
                        <Image
                            key={image.id}
                            image={image}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;
