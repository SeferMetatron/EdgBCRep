import { useState, useEffect } from "react";
import MessageCard from "../MessageCard";
import "./index.css";
import { GET } from "../../utils/api";

const BASE_URL = "https://edgemony-backend.herokuapp.com/messages";
const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, []);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList.map((message) => (
          <MessageCard textContent={message} key={message.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
