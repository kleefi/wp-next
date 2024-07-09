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
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      {post.categories.nodes.map((category) => (
        <span key={category.slug}>{category.name}</span>
      ))}
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <FeaturedImage
        src={post.featuredImage?.node?.mediaDetails?.file}
        alt={post.title}
      />
      <Link href="/blog">Back</Link>
    </>
  );
};

export default ShowDetail;
