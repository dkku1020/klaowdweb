import Image from "next/image";

const Catalogue = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {" "}
      {/* Added padding to give space */}
      <p className="h-16 justify-center align-middle">Catalogue</p>
      <div className="flex flex-row items-center px-4">
        <Image
          src="/his.webp"
          alt="His"
          width={500}
          height={300}
          className="object-cover px-2"
        />
        <Image
          src="/closeup.jpeg"
          alt="Hers Close up"
          width={500}
          height={300}
          className="object-cover px-2"
        />
        <Image
          src="/hers.jpeg"
          alt="Hers"
          width={500}
          height={300}
          className="object-cover px-2"
        />
      </div>
    </div>
  );
};

export default Catalogue;
