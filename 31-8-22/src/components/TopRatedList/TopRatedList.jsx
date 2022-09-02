import MainCard from "../MainCard";
import { memo } from "react";
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

export default memo(TopRatedList);
