import React, {FunctionComponent, useCallback} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {TState} from "../../state/reducers/reducer";
import close from '../../images/close.svg';

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
        >
            <div
                className="modal__background"
                onClick={handleClose}
            />
            <div
                className="modal__content"
            >
                <p
                    className="modal__loading-indicator"
                >
                    Loading...
                </p>
                <img
                    src={image.urls.full}
                    alt={image.alt_description}
                    className="modal__image"
                />
                <button
                    className="modal__close"
                    onClick={handleClose}
                >
                    <img src={close} alt="close"/>
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
