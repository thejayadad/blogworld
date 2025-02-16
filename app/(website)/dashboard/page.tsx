import { auth } from "@/auth";
import HeadingText from "@/components/auth/heading-text";
import Box from "@/components/ui/Box";
import NewPost from "@/components/ui/new-post";

const DashboardPage = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;

  return (
    <Box>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex items-center justify-between">
          <HeadingText
            title="Dashboard Page"
            description="Create & Review all of your posts"
          />
          <NewPost  />
        </div>
        <div>All Post Section</div>
      </div>
    </Box>
  );
};

export default DashboardPage;
