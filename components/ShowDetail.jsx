"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getAllPosts from "../libs/posts";
import FeaturedImage from "../components/FeaturedImage";
import Loading from "../app/loading";
import Link from "next/link";

const ShowDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const data = await getAllPosts();
        const selectedPost = data.nodes.find((p) => p.slug === slug);
        setPost(selectedPost);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <Loading />;
  }

  return (
    <>
      <div className="mx-auto max-w-[1200px] py-4 md:px-0">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
        {post.categories.nodes.map((category) => (
          <Link
            href={`/categories/${category.slug}`}
            key={category.slug}
            className="my-2 mr-2 inline-flex bg-orange-200 px-4 py-2"
          >
            {category.name}
          </Link>
        ))}
        <div className="flex flex-col">
          <FeaturedImage
            className="full-img flex"
            src={post.featuredImage?.node?.mediaDetails?.file}
            alt={post.title}
          />
          <div
            className="article-height"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        <Link href="/blog">Back</Link>
      </div>
    </>
  );
};

export default ShowDetail;
