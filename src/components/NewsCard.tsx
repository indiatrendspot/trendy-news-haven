import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  category: string;
}

export const NewsCard = ({ id, title, summary, imageUrl, date, category }: NewsCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <Link to={`/article/${id}`} className="block">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-semibold px-2 py-1 rounded bg-secondary/10 text-secondary">
              {category}
            </span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <h2 className="font-merriweather text-xl font-bold mb-2 line-clamp-2">{title}</h2>
          <p className="text-gray-600 line-clamp-3">{summary}</p>
        </div>
      </Link>
    </article>
  );
};