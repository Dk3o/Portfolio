import React from 'react';

const Image = props => {
    return <img className={props.imgClass} src={props.imgSrc} alt={props.imgAlt}></img>;
}

export default Image;