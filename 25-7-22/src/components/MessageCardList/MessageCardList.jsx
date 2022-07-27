import { useState, useEffect } from "react";
import MessageCard from "../MessageCard";
import "./index.css";
import { GET, DELETE } from "../../utils/api";

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, []);

  const dateOrder = (x, y) => (x.date < y.date ? 1 : -1);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .sort((x, y) => dateOrder(x, y))
          .map((message) => (
            <MessageCard
              DeleteMessageCard={() => {
                DELETE("messages/", message.id).then(() =>
                  window.location.reload()
                );
              }}
              textContent={message}
              key={message.id}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
