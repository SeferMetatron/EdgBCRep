import MainCard from "../MainCard";
import "./index.css";

const UpcomingList = ({ data }) => {
  return (
    <div className="UpcomingList">
      {data.map((item, index) => (
        <MainCard data={item} className="up-coming" key={index} />
      ))}
    </div>
  );
};

export default UpcomingList;
