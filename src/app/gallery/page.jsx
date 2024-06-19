import Image from "next/image";

export const metadata = {
  title: "Gallery",
  description: "Gallery Page",
};

const GalleryPage = () => {
  return (
    <div className="px-2">
      <h3 className="text-2xl border-b-2 pb-1 mx-auto mb-5 font-bold w-fit">
        Image Gallery
      </h3>
      <p className="text-center mb-5">My favorite some images is here....</p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((img) => (
          <div
            key={img}
            className="relative w-full"
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src={`/images/${img}.jpg`}
              alt={`image-${img}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
