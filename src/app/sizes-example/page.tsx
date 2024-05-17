import Image from "next/image";
import src from "../../../public/arrakis.jpeg";

/* 
  The `sizes` attribute is used to define the size of the image element.
  Even though the image is 7360 x 4912 pixels, the `sizes` attribute will ensure that the correct 
  size is downloaded based on the viewport width.
*/
export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <Image
        src={src} // Static Image, no need to set the width and height
        alt="desert"
        placeholder="blur"
        className="md:w-40 w-screen"
        sizes="(max-width: 768px) 100vw, 160px"
      />
    </main>
  );
}
