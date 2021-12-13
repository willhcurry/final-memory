import './SingleCard.css';

import back from '../img/back.png';

export default function SingleCard({ card, handleChoice, flipped, disabled, disappear }) {

    //allows click if previous turn is finished
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    //adds flipped and disappear classNames
    return (
        <div className="card">
            <div className={
                `${flipped ? "flipped" : ""}
                ${disappear ? "disappear" : ""}`
            }>
                <img className="front" src={card.src} alt="card front displayed" />
                <img
                    className="back"
                    src={back}
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}