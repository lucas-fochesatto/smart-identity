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
        <div className="flex items-center flex-col flex-grow">
          <div className="w-9/12 mt-12 p-1 bg-stone-100 text-center text-gray-800 text-3xl font-bold">
            <h1>Integrantes do Grupo</h1>
          </div>
          <div className="flex items-center flex-rows place-content-center gap-x-10">
            <div className="mt-12 w-4/12 h-[353px] bg-gray-200" >
              <div className="flex items-center pl-9 mt-8">
                <div className="w-1/2 text-left text-black font-bold">
                  <p className="text-lg mt-0mb-2">Nome: Lucas Emanuel de Andrade Fochesatto</p>
                  <p className="text-lg m-0">Descrição mts pika mds issaki vai se complicated, pai n manda bem em port</p>
                  <p className="text-lg m-0"><Link href='/'>Linkedin-&gt;</Link></p>
                </div>
              </div>
            </div>
            <div className="mt-12 w-4/12 h-[353px] bg-gray-200" >
              <div className="flex items-center pl-9 mt-8">
                <div className="w-1/2 text-left text-black font-bold">
                  <p className="text-lg mt-0 mb-2">Nome: Isack Daniel Targino de Souza</p>
                  <p className="text-lg m-0">Descrição mts pika mds issaki vai se complicated, pai n manda bem em port</p>
                  <p className="text-lg m-0"><Link href='/'>Linkedin-&gt;</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-rows place-content-center gap-x-10">
            <div className="mt-4 w-4/12 h-[353px] bg-gray-200" >
              <div className="flex items-center pl-9 mt-8">
                <div className="w-1/2 text-left text-black font-bold">
                  <p className="text-lg mt-0 mb-2">Nome: Ian Patrick da Costa Soares</p>
                  <p className="text-lg m-0">Descrição mts pika mds issaki vai se complicated, pai n manda bem em port</p>
                  <p className="text-lg m-0 text-blue-700"><a href='https://www.linkedin.com/in/ianptkcs//' target='_blank' rel='noopener noreferrer'>Linkedin-&gt;</a></p>
                </div>
              </div>
            </div>
            <div className="mt-4 w-4/12 h-[353px] bg-gray-200" >
              <div className="flex items-center pl-9 mt-8">
                <div className="w-1/2 text-left text-black font-bold">
                  <p className="text-lg mt-0 mb-2">Nome: Marcus Vinícius Corbo dos Santos</p>
                  <p className="text-lg m-0">Descrição mts pika mds issaki vai se complicated, pai n manda bem em port</p>
                  <p className="text-lg m-0 text-blue-700"><a href='https://www.linkedin.com/in/marcus-corbo/' target='_blank' rel='noopener noreferrer'>Linkedin-&gt;</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
