import './SingleCard.css';

export default function SingleCard({ card, handleChoice }) {

    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card image" />
                <img
                    className="back"
                    src="/img/ChocoboBack.png"
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}