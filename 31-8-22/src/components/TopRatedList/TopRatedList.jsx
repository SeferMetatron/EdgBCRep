import MainCard from "../MainCard";
import "./index.css";

const TopRatedList = ({ data }) => {
  return (
    <div className="TopRatedList">
      {data.map((item, index) => (
        <MainCard data={item} className="top-rated" key={index} />
      ))}
    </div>
  );
};

export default TopRatedList;
