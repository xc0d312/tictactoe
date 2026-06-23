import { useState } from "react";
function CardTwiter({ userName, name, following }) {
  const [isFollowing, setIsFollowing] = useState(following);
  // const handleClick = () => {
  //   //solo setIsFollowing a true o false
  //   setIsFollowing(!isFollowing);
  // };

  return (
    <article className="follow-card">
      <header className="follow-card__header">
        <img
          className="follow-card__avatar"
          src="https://unavatar.io/geovannnycortez0102@gmail.com"
          alt="Avatar de Geovanny"
        />
      </header>

      <div className="follow-card__info">
        <strong className="follow-card__name">{name}</strong>
        <span className="follow-card__handle">@{userName}</span>
      </div>

      <aside className="follow-card__actions">
        <button
          className={isFollowing ? "follow-card__button following" : "follow-card__button"}
          type="button"
          onClick={() => { 
            setIsFollowing(!isFollowing);
          }}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </aside>
    </article>
  );
}
export { CardTwiter };
