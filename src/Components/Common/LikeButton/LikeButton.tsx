import React, {FunctionComponent} from 'react';
import favorite from '../../../images/like.svg';

interface ILikeButton {
    clickCallback: (args: any) => void;
    isActive?: boolean;
}

const LikeButton: FunctionComponent<ILikeButton> = ({ clickCallback, isActive }) => (
    <button
        className={`like-button ${isActive ? 'like-button--active' : ''}`}
        onClick={clickCallback}
    >
        <img src={favorite} alt="favorite"/>
    </button>
);

export default LikeButton;
