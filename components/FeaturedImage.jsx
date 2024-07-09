import Image from "next/image";
import Link from "next/link";

const FeaturedImage = ({ src, alt }) => {
  const placeholderImage = "https://dummyimage.com/600x400/000/fff";
  const imageUrl = src
    ? `http://localhost/gwi-tuk/wp-content/uploads/${src}`
    : placeholderImage;
  return (
    <>
      <Image
        src={imageUrl}
        alt={alt || "Placeholder Image"}
        width={600}
        height={400}
      />
    </>
  );
};

export default FeaturedImage;
