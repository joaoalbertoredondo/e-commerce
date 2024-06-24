import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 pt-4">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Transforming Fashion, Redefining Style!
          </h1>
          <p className="max-w-md text-justify leading-relaxed text-gray-600">
            Discover the perfect blend of style and sophistication at
            <span className="decoration-orange-300 underline"> NextCommerce</span>. Explore
            our curated collection and find your next favorite look. Shop now
            and elevate your wardrobe effortlessly!
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-200 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              height={500}
              width={500}
              src={urlFor(data.image1).url()}
              alt="Image 1"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-200 shadow-lg">
            <Image
              height={500}
              width={500}
              src={urlFor(data.image2).url()}
              alt="Image 2"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-200 active:bg-gray-300"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-200 active:bg-gray-300"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-200 active:bg-gray-300"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
