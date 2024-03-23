"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-white">
        <img src="big_logo.svg" alt="" />
        <div className="p-2.5 text-gray-800 text-center mt-12 text-5xl">
          <h2>Conecte sua carteira para emitir seus documentos com</h2>
          <h2>praticidade e simplicidade!</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
