import { useLocation } from "react-router-dom";
import { NewsCard } from "./NewsCard";

// Temporary mock data - will be replaced with database data
const mockNews = [
  {
    id: "1",
    title: "Major Economic Reform Package Announced",
    summary: "Government unveils comprehensive economic reforms targeting growth and employment...",
    imageUrl: "/placeholder.svg",
    date: "2024-02-20",
    category: "Business"
  },
  {
    id: "2",
    title: "Tech Innovation Summit Begins in Delhi",
    summary: "Leading tech companies gather to showcase latest innovations and discuss future trends...",
    imageUrl: "/placeholder.svg",
    date: "2024-02-20",
    category: "Technology"
  },
  {
    id: "3",
    title: "New Political Alliance Forms Ahead of Elections",
    summary: "Major political parties announce coalition plans for upcoming state elections...",
    imageUrl: "/placeholder.svg",
    date: "2024-02-20",
    category: "Politics"
  }
];

export const NewsGrid = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash

  const filteredNews = currentPath && currentPath !== "/"
    ? mockNews.filter(news => news.category.toLowerCase() === currentPath.toLowerCase())
    : mockNews;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredNews.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  );
};