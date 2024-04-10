export const PostImage = ({ mainImage }: { mainImage: string }) => (
  <div className="relative block overflow-hidden group">
    <img
      className="rounded-lg w-full h-1/2 aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
      src={mainImage}
      width={100}
      height={100}
      alt="Post Image"
    />
  </div>
);
