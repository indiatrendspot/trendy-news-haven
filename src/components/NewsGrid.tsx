import { NewsCard } from "./NewsCard";

// Temporary mock data - will be replaced with actual data from backend
const mockNews = [
  {
    id: "1",
    title: "Major Economic Reform Package Announced",
    summary: "Government unveils comprehensive economic reforms targeting growth and employment...",
    imageUrl: "/placeholder.svg",
    date: "2024-02-20",
    category: "Economy"
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
    title: "New Healthcare Initiative Launched",
    summary: "Government announces nationwide healthcare program focusing on rural areas...",
    imageUrl: "/placeholder.svg",
    date: "2024-02-20",
    category: "Healthcare"
  }
];

export const NewsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {mockNews.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  );
};