import React, {Component} from 'react';
import './index.css'
import noImg from '../../images/no-image.jpg'

const lang = [
    {
        link: "#",
        title: "Traveling",
    },
    {
        link: "#",
        title: "Design",
    },
    {
        link: "#",
        title: "Sports",
    },
    {
        link: "#",
        title: "Startups",
    },
];

class Card extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className="card">
                {lang.map((item, index) =>
                    <a href={item.link} key={index} className="card__link"><img src={noImg} alt={item.title}/><span className="card__link__title">{item.title}</span></a>
                )}
            </div>
        )
    }
}

export default Card;
