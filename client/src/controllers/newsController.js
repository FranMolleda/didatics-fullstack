import { ClientAxiosBack } from "../config/urlAxios";

export const getNews = async (setStoredNews, setArchivedNewsStored) => {
  try {
    const response = await ClientAxiosBack.get("/news");
    const generalViews = response.data.filter((element) => {
      return element.archived === false;
    });
    const archiveViews = response.data.filter((element) => {
      return element.archived !== false;
    });
    setStoredNews(generalViews);
    setArchivedNewsStored(archiveViews);
  } catch (error) {
    console.log(error);
  }
};

export const addReport = async (news) => {
  try {
    await ClientAxiosBack.post("/news", news);
  } catch (error) {
    console.log(error);
  }
};

export const deleteReport = async (id) => {
  try {
    await ClientAxiosBack.delete(`/news/${id}`);
  } catch (error) {
    console.log(error);
  }
};
