"use client";

import { Toaster } from "react-hot-toast";
import { WagmiConfig, useAccount } from "wagmi";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import Header2 from "./Header2";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { BlockieAvatar } from "./scaffold-eth";
import Header3 from "./Header3";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const { address: connectedAddress } = useAccount();
  
  return (
    <>
    {!connectedAddress ? <Header2/> : <Header3/>}
      <div className="flex flex-col min-h-screen">
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
    </>
  );
};

export const ScaffoldApp = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
      >
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
