"use client";

import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import Header2 from "./Header2";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header2/>
      <div className="flex flex-col min-h-screen">
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

export const ScaffoldApp = ({ children }: { children: React.ReactNode }) => {

  return (
    <WagmiConfig config={wagmiConfig}>
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
    </WagmiConfig>
  );
};
