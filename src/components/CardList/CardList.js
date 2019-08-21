import React from 'react';
import Card from '../Card/Card';

class CardList extends React.Component {
    state = {
        cards: [
            {id: 1, title: 'Web design', theme: 'theme1', url: '/webdesign'},
            {id: 2, title: 'Web development', theme: 'theme2', url: '/webdevelopment' },
            {id: 3, title: '3D graphic', theme: 'theme3', url: '/3dgraphic'},
            {id: 4, title: '2D graphic', theme: 'theme4', url: '/2dgraphic'},
        ]
    };

    render() {
        var cardList = this.state.cards.map((card) => {
            return (
                <Card
                    key={card.id}
                    card={card}
                />
            );
        });

        return(
            <div className="card-list">
                {cardList}
            </div>
        );
    }
}

export default CardList;