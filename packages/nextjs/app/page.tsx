"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  if(!connectedAddress) {
    return (
      <>
        <div className="flex items-center flex-col flex-grow pt-10 bg-white">
          <img src="big_logo.svg" alt="" />
          <div className="p-2.5 text-gray-800 text-center mt-12 text-5xl mb-12">
            <h2>Conecte sua carteira para emitir seus documentos com</h2>
            <h2>praticidade e simplicidade!</h2>
          </div>
          <RainbowKitCustomConnectButton/>
        </div>
      </>
    );
  } else {
    return (
      <div className="p-10  bg-white min-h-screen">
        <div className="p-2.5 text-gray-800 text-3xl font-semibold">
          <h1>Olá, Lucas!</h1>
        </div>

        <div className="flex items-center flex-col flex-grow">
          <div className="w-1/2 p-1 bg-stone-100 text-center text-gray-800 text-2xl font-bold">
            <h1>Minha carteira de documentações</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-12" >
          <Link href='Certidao_de_Nascimento' className="p-10  bg-green-700 h-64 w-3/12 max-w-72 rounded-3xl">
            <div className="p-2 text-white text-3xl font-semibold">
              <h1>Certidão de Nascimento</h1>
              </div>
            <div className="p-2 text-white text-1xl font-semibold">
              <p>Acesse aqui sua certidão de nascimento</p>
            </div>
          </Link>
          <Link href='Identidade' className="p-10  bg-blue-700 h-64 w-3/12 max-w-72 rounded-3xl">
            <div className="p-2 text-white text-3xl font-semibold">
              <h1>Identidade</h1> 
            </div>
            <div className="p-2 text-white text-1xl font-semibold">
                <p>Acesse aqui sua documento de identificação</p>
            </div>
          </Link>
          <Link href='CPF' className="p-10  bg-yellow-500 h-64 w-3/12 max-w-72 rounded-3xl">
            <div className="p-2 text-white text-3xl font-semibold">
              <h1>CPF</h1>
            </div>
            <div className="p-2 text-white text-1xl font-semibold">
              <p>Acesse aqui seu CPF</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
};

export default Home;
