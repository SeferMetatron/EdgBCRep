import Button from "../Button";
import "./index.css";
import Modal from "../Modal/modal";
import { useState } from "react";
const ImageCard = ({ data }) => {
  const [isModalVisibile, setModalVisibility] = useState(false);
  return (
    <div className="ImageCard">
      <img className="ImageCard__img" src={data.url} alt={data.name} />
      <p className="ImageCard__par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Button btnTextCont={data.name} />
      <Modal
        source={data.url}
        visibility={isModalVisibile}
        closeModal={() => setModalVisibility(false)}
      />
    </div>
  );
};

export default ImageCard;
