import "./index.css";

const friendCard = ({ friend }) => {
  return (
    <div className="friend-card">
      <img src={friend.photo} alt="profpic" className="profpic" />
      <p>{friend.name}</p>
    </div>
  );
};
export default friendCard;
