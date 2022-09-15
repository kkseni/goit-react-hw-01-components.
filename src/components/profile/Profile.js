import PropTypes from "prop-types";
export default function Profile({ avatar, name, tag, location, followers, views, likes }) {
        return (
          <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      width='150'
     className="avatar"
    />
    <p className="name">{name }</p>
    <p className="tag">{ tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{followers }</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{views }</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{likes }</span>
    </li>
  </ul>
</div>
 )
}
Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};