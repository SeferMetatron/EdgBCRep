import { useState } from "react";
import ImageCard from "../ImageCard";
import galleryMock from "../../assets/galleryMock";
import Modal from "../Modal/modal";
import "./index.css";

const Gallery = ({ visibility }) => {
  const [isPictureVisible, setPictureVisibility] = useState(false);
  const [url, setUrl] = useState();

  return (
    <div className="Gallery">
      {visibility ? (
        <>
          <h2 className="Gallery__header">Gallery</h2>
          <div className="Gallery__content">
            {galleryMock.map((image) => (
              <ImageCard
                onClick={() => {
                  setPictureVisibility(!isPictureVisible);
                  setUrl(image.url);
                }}
                key={image.id}
                data={image}
              />
            ))}
          </div>
        </>
      ) : (
        <h2>Nascosto!!!</h2>
      )}

      <Modal
        url={url}
        onClick={() => setPictureVisibility(!isPictureVisible)}
        display={isPictureVisible}
      />
    </div>
  );
};

export default Gallery;
