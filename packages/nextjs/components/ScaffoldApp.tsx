"use client";

import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import Header2 from "./Header2";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { BlockieAvatar } from "./scaffold-eth";

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
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={lightTheme()}
      >
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
