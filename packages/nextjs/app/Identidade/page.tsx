"use client";

import Link from "next/link";
import dbJson from "../../../hardhat/deployments/scrollSepolia/Database.json";
import type { NextPage } from "next";
import { useAccount, useContractRead } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useState } from "react";
import { getParsedError, notification } from "~~/utils/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const [result, setResult] = useState<unknown>();

  const { isFetching, refetch } = useContractRead({
    address: dbJson.address,
    functionName: 'idChain',
    abi: dbJson.abi,
    enabled: false,
    args: [connectedAddress],
    onError: (error: any) => {
      const parsedErrror = getParsedError(error);
      notification.error(parsedErrror);
    },
  });

  const retrieve = async () =>{
    const { data } = await refetch();
    setResult(data);
  }

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
    retrieve()  
    while(result != undefined && connectedAddress != null)
    return (
      <div className="p-10  bg-white min-h-screen">
        <div className="p-2.5 text-gray-800 text-3xl font-semibold">
          <h1>Olá, {result[0]}!</h1>
        </div>

        <div className="flex items-center flex-col flex-grow">
          <div className="w-1/2 p-1 bg-stone-100 text-center text-gray-800 text-2xl font-bold">
            <h1>Documento de Identidade</h1>
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
                    <p className="m-0 text-sm text-black font-semibold">{result[0]}</p>
                  </div>
                  <div>
                    <p className="mt-4 mb-0 text-xs text-black font-medium">CPF</p>
                    <p className="mt-0 mb-4 text-sm text-black font-semibold">{result[1].toString()}</p>
                  </div>
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Registro geral</p>
                    <p className="m-0 text-sm text-black font-semibold">{result[2].toString()}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-4 pl-9">
                <div className="text-lg pl-4">
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Naturalidade</p>
                    <p className="m-0 text-sm text-black font-semibold">{result[6]}</p>
                  </div>
                  <div>
                    <p className="mt-4 mb-0 text-xs text-black font-medium">Nacionalidade</p>
                    <p className="mt-0 mb-4 text-sm text-black font-semibold">{result[7]}</p>
                  </div>
                  <div>
                    <p className="m-0 text-xs text-black font-medium">Sexo</p>
                    <p className="m-0 text-sm text-black font-semibold">{result[8]}</p>
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
