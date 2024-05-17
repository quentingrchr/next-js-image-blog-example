import Image from "next/image";
import src from "../../../public/arrakis.jpeg";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* <h1 className="relative z-30 text-8xl text-center">Welcome to Arrakis</h1> */}
      <div className="absolute w-full h-full z-20 top-0 left-0 bottom-0 right-0 bg-black/10" />
      <div className="absolute w-full h-full z-10 top-0 left-0 bottom-0 right-0 overflow-hidden">
        <Image
          src={src}
          alt="desert"
          placeholder="blur"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/*
Image statique, pas besoin de définir la largeur et la hauteur de l'image et le blur est directement supporté
Fill: Remplit l'élément parent en étirant l'image pour qu'elle remplisse l'élément parent, pas de sizes défini alors le browser va télécharger l'image à la taille du viewport (100vw)
*/
