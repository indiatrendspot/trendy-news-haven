import { Header } from "@/components/Header";
import { NewsGrid } from "@/components/NewsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-merriweather font-bold mb-8 px-6">Latest News</h2>
        <NewsGrid />
      </main>
    </div>
  );
};

export default Index;