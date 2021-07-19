import React, {FunctionComponent, useCallback} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {TState} from "../../state/reducers/reducer";

const ImageModal: FunctionComponent = () => {
    const history = useHistory();

    const { imageMap } = useSelector((state: TState) => state);

    const { search } = useLocation();
    const id = (new URLSearchParams(search)).get('image');

    const image = id && imageMap && imageMap.get(id);

    const handleClose = useCallback(() => {
        history.push(history.location.pathname);
    }, []);

    if (!image) {
        return null;
    }

    return (
        <div
            className="modal"
            onClick={handleClose}
        >
            <div
                className="modal__content"
            >
                <img
                    src={image.urls.full}
                    alt={image.alt_description}
                    className="modal__image"
                />
            </div>
        </div>
    );
};

export default ImageModal;
