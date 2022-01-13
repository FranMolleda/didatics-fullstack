import { createContext, useState, useEffect } from "react";
import { getNews } from "../controllers/newsController";

export const NewsContext = createContext();

const NewsProvider = (props) => {
  const [news, setNews] = useState({
    // id: "",
    title: "",
    description: "",
    // content: "",
    // author: "",
  });

  const [storednews, setStoredNews] = useState([]);
  const [archivednewstored, setArchivedNewsStored] = useState([]);
  useEffect(() => {
    const newsBbdd = async () => {
      getNews(setStoredNews, setArchivedNewsStored);
    };
    newsBbdd();
  }, [setStoredNews, setArchivedNewsStored]);

  return (
    <NewsContext.Provider
      value={{
        news,
        storednews,
        archivednewstored,
        setNews,
        setStoredNews,
        setArchivedNewsStored,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
