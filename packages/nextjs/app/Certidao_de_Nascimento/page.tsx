"use client";

import dbJson from "../../../hardhat/deployments/scrollSepolia/Database.json";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount, useContractRead, useContractReads, useContractWrite  } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useEffect, useState } from "react";
import { getParsedError, notification } from "~~/utils/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  /*
  const [personResult, setPersonResult] = useState<unknown>();
  const [personFinished, setPersonFinished] = useState<boolean>();
  const [documentResult, setDocumentResult] = useState<unknown>();

  const { isFetching: fetchingPerson, refetch: refetchPerson } = useContractRead({
    address: dbJson.address,
    functionName: 'idChain',
    abi: dbJson.abi,
    enabled: false,
    args: [connectedAddress],
    onSuccess(data) {
      setPersonFinished(true);
    },
    onError: (error: any) => {
      const parsedErrror = getParsedError(error);
      notification.error(parsedErrror);
    },
  });

  const retrievePerson = async () =>{
    const { data } = await refetchPerson();
    setPersonResult(data);
  }

  const { isFetching: fetchingDocument, refetch: refetchDocument } = useContractRead({
    address: dbJson.address,
    functionName: 'documentNascimentoChain',
    abi: dbJson.abi,
    enabled: false,
    args: [connectedAddress],
    onError: (error: any) => {
      const parsedErrror = getParsedError(error);
      notification.error(parsedErrror);
    },
  });

  const retrieveDocument = async () =>{
    const { data } = await refetchDocument();
    setDocumentResult(data);
  }
  */

  const { data, isError, isLoading } = useContractRead({
    address: dbJson.address,
    abi: dbJson.abi,
    functionName: 'idChain',
    args: [connectedAddress],
  })
  
  if(!connectedAddress) {
    return (
      <>
        <div className="flex items-center flex-col flex-grow pt-10 mt-12 bg-white">
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
    if(isLoading){
      return <h1 className="p-2.5 text-gray-800 text-3xl font-semibold">Loading...</h1>
    } else {
        return (
          <div className="p-10  bg-white min-h-screen">
            <div className="p-2.5 text-gray-800 text-3xl font-semibold">
              <h1>Olá,!</h1>
            </div>
    
            <div className="flex items-center flex-col flex-grow">
              <div className="w-8/12 p-1 bg-stone-100 text-center text-gray-800 text-2xl font-bold">
                <h1>Certidão de Nascimento</h1>
              </div>
              <div className="mt-10 w-[621px] h-[877px] bg-[url('../public/esqueletoCdn.png')]">
                <div className="flex items-center">
                  <img className="h-[70px] w-[265] mt-12 ml-12" src="brasao.png" alt="" />
                  <div className="pt-8 mr-12 w-full text-green-900 font-bold">
                    <p className="pl-16 m-0 text-lg text-left">REPÚBLICA FEDERATIVA DO BRASIL</p>
                    <p className="pl-32 m-0 text-base text-left">GOVERNO FEDERAL</p>
                  </div>
                </div>
                <div className="flex flex-col w-full items-center">
                  <p className="mb-0.5 pb-0.5 text-sm bg-gray-300 text-center text-black font-medium">Nome</p>
                  <p className="mt-0.5 mb-1.5  text-black text-center font-semibold">{data[0]}</p>
                  <p className="mt-0.5 mb-0.5 pb-0.5 text-sm bg-gray-300 text-center text-black font-medium">Matricula</p>
                  <p className="mt-0.5 mb-1.5 text-black text-center font-semibold">{data[9].toString()}</p>
                  <p className="mt-0.5 mb-0.5 pb-0.5 text-sm bg-gray-300 text-center text-black font-medium">Data de Nascimento</p>
                  <p className="mt-0.5 text-black text-center font-semibold">{data[5]}</p>
                </div>
                <div className="flex flex-row w-full mt-6 mb-6 pl-10 pr-10 text-center">
                  <div className="flex w-1/2 place-content-center gap-5">
                    <div className="text-lg pl-4">
                      <p className="m-0 text-xs text-black bg-gray-300 font-medium">Municipio de Nascimento</p>
                      <p className="m-0 mb-1.5 text-sm text-black font-semibold">{data[6]}</p>
                      <p className="m-0 text-xs text-black bg-gray-300 font-medium">Sexo</p>
                      <p className="m-0 mb-1.5 text-sm text-black font-semibold">{data[8]}</p>
                      <p className="m-0 text-xs text-black bg-gray-300 font-medium">Nome da Mãe</p>
                      <p className="m-0 text-sm text-black font-semibold">{data[10]}</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 place-content-center gap-5">
                    <div className="text-lg pl-4">
                      <p className="m-0 text-xs text-black bg-gray-300 font-medium">Municipio de Registro</p>
                      <p className="m-0 mb-1.5 text-sm text-black font-semibold">{data[6]}</p>
                      <p className="m-0 text-xs text-black bg-gray-300 font-medium">Nacionalidade</p>
                      <p className="m-0 mb-1.5 text-sm text-black font-semibold">{data[7]}</p>
                      <p className="m-0 text-xs text-black bg-gray-300 font-medium">Nome do Pai</p>
                      <p className="m-0 text-sm text-black font-semibold">{data[11]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

  }
};

export default Home;
