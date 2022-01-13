import { useContext, useEffect } from "react";
import FormNews from "./FormNews";
import { NewsContext } from "../../../context/newsContext";
import { getNews } from "../../../controllers/newsController";
import { Container } from "react-bootstrap";
import Cards from "../../Cards";

const News = () => {
  const newsContext = useContext(NewsContext);
  const {
    news,
    storednews,
    archivednewstored,
    setNews,
    setStoredNews,
    setArchivedNewsStored,
  } = newsContext;

  return (
    <div>
      <h1>Desde News</h1>
      <FormNews />
      {storednews.length > 0 ? (
        <Container>
          {storednews.map((report) => (
            <Cards report={report} key={report._id} />
          ))}
        </Container>
      ) : (
        <h2>No News yet</h2>
      )}
    </div>
  );
};

export default News;
