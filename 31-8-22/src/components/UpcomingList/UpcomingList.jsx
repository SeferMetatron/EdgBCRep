import MainCard from "../MainCard";
import { memo } from "react";
import "./index.scss";

const UpcomingList = ({ data }) => {
  return (
    <div className="UpcomingList">
      {data.map((item, index) => (
        <MainCard data={item} className="up-coming" key={index} />
      ))}
    </div>
  );
};

export default memo(UpcomingList);
