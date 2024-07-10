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
      <div className="mx-auto max-w-[1200px] py-4 md:px-0">
        <h1 className="text-2xl font-semibold uppercase">Blog Page</h1>
        <hr className="my-2" />
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="my-4 flex flex-col items-center rounded-md bg-[#f1f1f1] p-4 shadow-sm md:flex-row">
              <FeaturedImage
                src={post.featuredImage?.node?.mediaDetails?.file}
                alt={post.title}
              />
              <div className="pl-4">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                {post.categories.nodes.map((category) => (
                  <span
                    key={category.slug}
                    className="my-2 mr-2 inline-flex bg-orange-200 px-4 py-2"
                  >
                    {category.name}
                  </span>
                ))}
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShowPosts;
