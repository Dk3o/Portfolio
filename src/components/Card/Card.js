import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/grid-layout.scss';
import './Card.scss';

import { LayoutContext } from '../../context/LayoutContext';

class Card extends React.Component {

    static contextType = LayoutContext;

    render() {
        const { title, theme, url } = this.props.card;
        
        return(
            <Link to={url}>
                <div className={`card ${this.context.gridLayout} ${theme}`}>
                    <div className="overlay">
                        <h2>{title}</h2>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;