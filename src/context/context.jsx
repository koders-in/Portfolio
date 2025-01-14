import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext(null);

const PortfolioState = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllPortfolioData = async () => {
    setLoading(true);
    try {
      const cachedData = sessionStorage.getItem("portfolioData");

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      let allData = [];
      let page = 1;
      let hasMoreData = true;

      while (hasMoreData) {
        const response = await fetch(
          `https://strapi.koders.in/api/koders-projects?pagination[page]=${page}&pagination[pageSize]=5&populate=*`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from server.");
        }

        const result = await response.json();
        if (result?.data?.length) {
          allData = [...allData, ...result.data];
          hasMoreData = page < result.meta.pagination.pageCount;
          page++;
        } else {
          hasMoreData = false;
        }
      }

      sessionStorage.setItem("portfolioData", JSON.stringify(allData));
      setData(allData);
    } catch (err) {
      setError("Failed to fetch portfolio data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPortfolioData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioState;
