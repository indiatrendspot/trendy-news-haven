import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";

const ArticleDetail = () => {
  const { id } = useParams();
  
  // This is temporary mock data - will be replaced with database data
  const article = {
    id: "1",
    title: "Major Economic Reform Package Announced",
    content: "Government unveils comprehensive economic reforms targeting growth and employment. The new package includes significant measures to boost various sectors of the economy and create new job opportunities across different industries.",
    imageUrl: "/placeholder.svg",
    date: "2024-02-20",
    category: "Economy"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-secondary text-sm font-semibold">{article.category}</span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            <h1 className="font-merriweather text-3xl font-bold mb-4">{article.title}</h1>
            <div className="prose prose-lg max-w-none">
              <p>{article.content}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ArticleDetail;