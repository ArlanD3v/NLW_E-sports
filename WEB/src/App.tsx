//Componestes / Propriedades (maiores conceitos do React)
import "./styles/main.css";
import {
  MagnifyingGlassPlus,
  MagicWand,
  Sword,
  Skull,
  CastleTurret,
} from "@phosphor-icons/react";

import logoImg from "./assets/Logo-nlw.svg";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          DUO
        </span>{" "}
        está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/lol.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white flex items-stretch">
              League Of Legends <MagicWand size={32} />{" "}
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/apex.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white flex items-stretch gap-2">
              Apex Legends <Sword size={32} />
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white flex items-stretch gap-2">
              CS Global Ofensive <Skull size={32} />
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/dota.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white flex items-stretch gap-2">
              {" "}
              Dota <Sword size={32} />{" "}
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/wwc.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white flex items-stretch gap-2">
              World Warcraft <Sword size={32} />
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/fotnite.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white flex items-stretch gap-2">
              Fortnite <CastleTurret size={32} />
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center ">
          <div>
            <strong className="text-2xl text-white font-black">
              Não encontrou seu DUO?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anuncio para achar seu DUO ideal!
            </span>
          </div>
          <button className="transition duration-500 py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center">
            <MagnifyingGlassPlus size={24} />
            <span className="hover:text-[17px]">Publicar Anuncio</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// PARA rodar o vite EXECUTE: npm run dev  dentro de \WEB
//npx tailwindcss init  (instalar o tailwind)
//npx tailwindcss init -p (instalar o tailwind + postcss)
//Stop in 01:52
