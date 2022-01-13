import { Card, Button } from "react-bootstrap";
import { deleteReport } from "../controllers/newsController";
import { useContext } from "react";
import { NewsContext } from "../context/newsContext";

const NewsCard = ({ report }) => {
  const newsContext = useContext(NewsContext);
  const {
    news,
    storednews,
    archivednewstored,
    setNews,
    setStoredNews,
    setArchivedNewsStored,
  } = newsContext;

  const handleDelete = (id) => {
    deleteReport(id);
    const filterDeleteReport = archivednewstored.filter(
      (report) => report._id !== id
    );
    setArchivedNewsStored(filterDeleteReport);
  };
  const handleArchive = (id) => {
    console.log(id);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{report.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {report.description}
        </Card.Subtitle>
        <Card.Text>{report.content}</Card.Text>
        {report.archived ? (
          <Button onClick={() => handleDelete(report._id)}>Delete</Button>
        ) : (
          <Button onClick={handleArchive}>Archive</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
