"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FeaturedImage from "../components/FeaturedImage";
import getAllPosts from "./../libs/posts";
import Loading from "./../app/loading";

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data.nodes);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="p-4 text-2xl font-semibold uppercase">Blog Page</h1>
      <hr className="my-2" />
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          {post.categories.nodes.map((category) => (
            <span key={category.slug}>{category.name}</span>
          ))}
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
          <FeaturedImage
            src={post.featuredImage?.node?.mediaDetails?.file}
            alt={post.title}
          />
          <div className="text-blue-400 underline hover:text-blue-600">
            More...
          </div>
        </Link>
      ))}
    </>
  );
};

export default ShowPosts;
