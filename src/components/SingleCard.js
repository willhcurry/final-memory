import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled, disappear }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className="card">
            <div className={
                `${flipped ? "flipped" : ""}
                ${disappear ? "disappear" : ""}`
            }>
                <img className="front" src={card.src} alt="card front displayed" />
                <img
                    className="back"
                    src="/img/ChocoboBack.png"
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}