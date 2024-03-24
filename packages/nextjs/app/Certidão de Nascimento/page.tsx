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
            <h1>Certidão de Nascimento</h1>
          </div>
          <div className="mt-12 w-[530px] h-[353px] bg-[url('../public/esqueleto.png')]" >
            <div className="flex items-center pl-9 mt-8">
              <img className="h-[70px]" src="brasao.png" alt="" />
              <div className="pr-10 w-full text-center text-green-900 font-bold">
                <p className="text-lg m-0">REPÚBLICA FEDERATIVA DO BRASIL</p>
                <p className="text-base m-0">GOVERNO FEDERAL</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex gap-5 mt-4 pl-9">
                <img width="103px" height="103px" src="person.png" alt="" />
                <div className="text-lg pl-4">
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Nome</p>
                    <p className="m-0 text-sm text-black font-semibold">Lucas Emanuel</p>
                  </div>
                  <div>
                    <p className="mt-4 mb-0 text-xs text-black font-medium">Matricula</p>
                    <p className="mt-0 mb-4 text-sm text-black font-semibold">2.691.510</p>
                  </div>
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Município de registro e Unidade da federação</p>
                    <p className="m-0 text-sm text-black font-semibold">2.691.510</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-4 pl-9">
                <div className="text-lg pl-4">
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Data</p>
                    <p className="m-0 text-sm text-black font-semibold">Local de nascimento</p>
                  </div>
                  <div>
                    <p className="mt-4 mb-0 text-xs text-black font-medium">Sexo</p>
                    <p className="mt-0 mb-4 text-sm text-black font-semibold">Brasileira</p>
                  </div>
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Sexo</p>
                    <p className="m-0 text-sm text-black font-semibold">F</p>
                  </div>
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
