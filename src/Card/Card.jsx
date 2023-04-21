import "./Card.css";

export default function Card() {
  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <img
          className="movie-card__img"
          src="https://i.ytimg.com/vi/dStQ7Dxm0bU/hqdefault.jpg"
        />
      </div>
      <div className="movie-card__body">
        <h2>
          น้ำ ผีนองสยองขวัญ <br />
          <span style={{ fontSize: "25px" }}>&#9989;</span>
        </h2>
        <button className="movie-card__btn">เลือก</button>
      </div>
    </div>
  );
}
