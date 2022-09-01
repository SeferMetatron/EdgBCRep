import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList/UpcomingList";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});
  const [topFiltered, setTopFiltered] = useState({});

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1");
    setTopFiltered(
      movieLists.topRated.filter((movie) => movie.vote_average >= 8.6)
    ).then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  return (
    <div className="MainSection">
      <div>
        <h2>Most Popular</h2>
        {movieLists.popular && <MainCard data={movieLists.popular[0]} />}
      </div>
      <div className="MainSection-body">
        <h3>Top Rated</h3>
        {movieLists.topRated && <TopRatedList data={topFiltered} />}
        <h3>Upcoming</h3>
        {movieLists.upcoming && <UpcomingList data={movieLists.upcoming} />}
      </div>
    </div>
  );
};

export default MainSection;
