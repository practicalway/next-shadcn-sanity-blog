// @ts-nocheck
import Image from "next/image";
import { urlForImage } from "../lib/sanity";

interface SanityImageAsset {
  _ref?: string;
}

interface ImageComponentProps {
  value: {
    asset?: SanityImageAsset;
    alt?: string;
  };
}

const ImageComponent: React.FC<ImageComponentProps> = ({ value }) => {
  const { asset, alt } = value;

  if (!asset || !asset._ref) {
    return <div>Image not found.</div>;
  }

  const imageUrl = urlForImage({ _ref: asset._ref }).url();

  if (!imageUrl) {
    return <div>Image not found.</div>;
  }

  return (
    <figure className="mt-4 mb-4">
      <Image
        className="w-full rounded"
        src={imageUrl}
        width={680}
        height={382}
        alt={alt || ""}
        style={{
          width: "50%",
          height: "50%",
        }}
      />
      {alt && (
        <figcaption className="mt-3 text-sm text-gray-500">{alt}</figcaption>
      )}
    </figure>
  );
};

export default ImageComponent;
