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
      <div className="flex items-center flex-col flex-grow mt-16 bg-white">
        <div className="w-1/2 h-96">
          <div className="flex items-center pl-9 mt-8">
            <div className="w-full text-center text-black font-bold">
              <p className="text-xl m-0">Sobre ID Bridge</p>
              <p className="text-base mt-0 mb-5 font-base">ID Bridge é algo que pode ser descrito e que outra pessoa que sabe fazer isso melhor que eu vai descrever</p>
              <p className='text-xl m-0'>Documentação</p> 
              <p className="text-lg m-0 font-base">Link para o <a href='https://github.com/lucas-fochesatto/smart-identity' target='_blank' className='text-blue-800'>github</a> do projeto</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
