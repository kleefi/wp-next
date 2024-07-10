import Image from "next/image";
import Link from "next/link";

const FeaturedImage = ({ src, alt }) => {
  const placeholderImage = "https://dummyimage.com/600x400/000/fff";
  const imageUrl = src
    ? `https://kleefi.com/wp-content/uploads/${src}`
    : placeholderImage;
  return (
    <>
      <Image
        className="full-img"
        src={imageUrl}
        alt={alt || "Placeholder Image"}
        width={300}
        height={300}
      />
    </>
  );
};

export default FeaturedImage;
