import { useState, useEffect } from "react";
import FriendCard from "../FriendCard";
import { GET, DELETE } from "../../utils/api";
import "./index.css";

const FriendCardList = ({
  setFilteredValue,
  isRenderedList,
  setRenderedList,
}) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("friends").then((data) => setFriendList(data));
  }, [isRenderedList]);

  return (
    <div className="FriendCardList">
      {friendList.length ? (
        friendList.map((friend) => (
          <FriendCard
            setFilteredValue={setFilteredValue}
            onImgClick={() => {
              DELETE("friends", friend.id).then(() =>
                setRenderedList(!isRenderedList)
              );
            }}
            key={friend.id}
            friendData={friend}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendCardList;
