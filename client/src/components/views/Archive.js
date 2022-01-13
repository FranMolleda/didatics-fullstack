import { useContext, useEffect } from "react";
import { NewsContext } from "../../context/newsContext";
import Cards from "../Cards";
import { Container } from "react-bootstrap";

const Archive = () => {
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
    <Container>
      <h1>Desde Archive</h1>
      {archivednewstored.length > 0 ? (
        archivednewstored.map((report) => (
          <Cards report={report} key={report._id} />
        ))
      ) : (
        <h2>No news Archived</h2>
      )}
    </Container>
  );
};

export default Archive;
