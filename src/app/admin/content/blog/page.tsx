import Filter from "./_components/Filter";
import TopButtons from "./_components/TopButtons";
import MatrixCards from "./_components/MatrixCards";
import BlogList from "./_components/BlogList";
import Card from "@/components/ui/Card";

const BlogContentControlPage = () => {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <Card className="md:p-8">
        <div className="mb-5 flex items-center gap-4 justify-between flex-wrap">
          <Filter />
          <TopButtons />
        </div>

        <BlogList />
      </Card>
    </div>
  );
};

export default BlogContentControlPage;
