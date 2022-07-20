import "./gallery.css";
import imagelinks from "../../assets/imagelinks";

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="card">
        {imagelinks.map((image) => (
          <img key={image.id} src={image.url + image.id}></img>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
