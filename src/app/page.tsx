import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-black">
      <h1 className="text-4xl font-bold mb-8 ">
        Next.js {`<Image/>`} examples
      </h1>
      <p className="text-lg mt-4">
        from this{" "}
        <Link
          className="underline"
          href="https://www.premieroctet.com/blog/next-image-component"
        >
          blog post
        </Link>
      </p>
      <ul className="list-disc flex flex-col space-y-4 mt-16">
        <li>
          <Link className="underline" href="/static-image-bg-example">
            Static Background Image Example
          </Link>
        </li>
        <li>
          <Link className="underline" href="/responsive-gallery-example">
            Responsive Gallery Example
          </Link>
        </li>
      </ul>
    </main>
  );
}
