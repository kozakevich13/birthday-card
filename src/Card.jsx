import "./index.css"

export default function Card(wish) {
  return (
    <div className="birthdayCard">
        <div className="cardFront">
         <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
            <div className="balloons">
                <div className="balloonOne" />
                <div className="balloonTwo" />
                <div className="balloonThree" />
                <div className="balloonFour" />
            </div>
        </div>
        <div className="cardInside">
            <h3 className="back">HAPPY BIRTHDAY vodoo!</h3>
            <p>Dear Friend,</p>
            <p className="wish">
               {wish.wish}
            </p>
            <p className="name">Vitaliy</p>
           
        </div>
  </div>
  );
}
