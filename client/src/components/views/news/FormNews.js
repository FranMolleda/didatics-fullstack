import { useState, useContext } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import { NewsContext } from "../../../context/newsContext";
import { addReport } from "../../../controllers/newsController";

const FormNews = () => {
  const newsContext = useContext(NewsContext);
  const {
    news,
    storednews,
    archivednewstored,
    setNews,
    setStoredNews,
    setArchivedNewsStored,
  } = newsContext;
  const [report, setReport] = useState(news);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleReportChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setNews(report);
    await addReport(report);
    setStoredNews([report, ...storednews]);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={handleReportChange}
                type="text"
                placeholder="Enter title"
                name="title"
                value={report.title}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={report.description}
                type="text"
                placeholder="Description"
                onChange={handleReportChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FormNews;
