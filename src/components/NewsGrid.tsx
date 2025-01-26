import { useLocation } from "react-router-dom";
import { NewsCard } from "./NewsCard";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

const fetchArticles = async (category?: string) => {
  let query = supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const { data, error } = await query;
  
  if (error) throw error;
  return data;
};

export const NewsGrid = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash
  
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['articles', currentPath],
    queryFn: () => fetchArticles(currentPath || undefined)
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        Error loading articles. Please try again later.
      </div>
    );
  }

  if (!articles?.length) {
    return (
      <div className="p-6 text-center text-gray-500">
        No articles found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          id={article.id}
          title={article.title}
          summary={article.summary}
          imageUrl={article.imageUrl}
          date={new Date(article.created_at).toLocaleDateString()}
          category={article.category}
        />
      ))}
    </div>
  );
};