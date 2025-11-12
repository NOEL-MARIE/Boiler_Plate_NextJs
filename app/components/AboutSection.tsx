
import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 bg-neutral-950">
      <h2 className="mb-6 text-4xl font-bold">À propos de moi</h2>

      <div className="flex justify-between w-screen px-11  ">
        

      <span className="w">
        <Image src={"/assets/card_DGZ.svg" } alt="image de presentation " width={"400"} height={350}></Image>
      </span>

      <span className="w">
               Jomor Design is a design practice focused on digital experiences. With every single one of our clients, we bring forth a deep passion for creative problem solving — which is what we deliver in the form of custom and memorable experiences.
      </span>

      <span className="w">
        
      </span>
    </div>
      <p className="max-w-2xl text-center text-gray-400">
        Ici, tu peux parler de ta mission, de tes valeurs ou de ce que représente ton travail.
      </p>
    </div>
  )
}
