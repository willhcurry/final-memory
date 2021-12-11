import './SingleCard.css';

export default function SingleCard({ card }) {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card image" />
                <img className="back" src="/img/ChocoboBack.png" alt="card back" />
            </div>
        </div>
    )
}