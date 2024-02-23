// components/News.js
import { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-23&sortBy=publishedAt&apiKey=fbb325dddc284054a86c08f9d2990655");
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      {news.map((article, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-600">{article.description}</p>
          <p className="text-sm text-gray-500 mt-2">Published at: {article.publishedAt}</p>
        </div>
      ))}
    </>
  );
}
