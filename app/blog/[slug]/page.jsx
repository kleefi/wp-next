import ShowDetail from "../../../components/ShowDetail";
import getAllPosts from "../../../libs/posts";

const stripHtmlTags = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const data = await getAllPosts();
  const selectedPost = data.nodes.find((p) => p.slug === slug);

  if (selectedPost) {
    return {
      title: selectedPost.title,
      description: stripHtmlTags(selectedPost.excerpt) || "Default description",
    };
  }
};

const Page = async ({ params }) => {
  const { slug } = params;
  const data = await getAllPosts();
  const selectedPost = data.nodes.find((p) => p.slug === slug);

  return (
    <>
      <ShowDetail post={selectedPost} />
    </>
  );
};

export default Page;
