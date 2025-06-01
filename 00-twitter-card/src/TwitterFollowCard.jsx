import { useState } from "react";

export function TwitterFollowCard({ username, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const imgSrc = `https://unavatar.io/${username}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgSrc} alt={name} />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}
