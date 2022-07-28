import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import Navbar from "./components/Navbar";
import Splashscreen from "./components/Splashscreen";
import AddFriend from "./components/AddFriend";
import Hero from "./components/Hero";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isPosted, setIsPosted] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <div className="App">
      {isLoginVisible ? (
        <Modal type="login" setIsModalVisible={setIsLoginVisible} />
      ) : (
        <>
          <Navbar setIsLoginVisible={isLoginVisible} />
          {/* <Hero/> */}
          <AddFriend />
          <main className="App__main">
            <div className="App__friends">
              <h3>Lista degli amici</h3>
              <FriendCardList />
            </div>
            <div className="App_messages">
              <AddMessage isPosted={isPosted} onAddButton={setIsPosted} />
              <MessageCardList isPosted={isPosted} setIsPosted={setIsPosted} />
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
