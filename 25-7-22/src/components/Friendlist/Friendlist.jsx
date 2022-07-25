import "./index.css";
import { GET } from "../../utils/api";
import { useState, useEffect } from "react";
import FriendCard from "../FriendCard/FriendCard";

const FRIEND_URL = "friends";

const Friendlist = () => {
  const [friend, setFriendList] = useState([]);

  useEffect(() => {
    GET(FRIEND_URL).then((data) => setFriendList(data));
  }, []);
  return (
    <div className="FriendCardList">
      {friend.map((friend) => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </div>
  );
};
export default Friendlist;
