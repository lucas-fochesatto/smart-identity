import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldApp } from "~~/components/ScaffoldApp";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Smart Identity",
    template: "%s | Scaffold-ETH 2",
  },
  description: "Built with 🏗 Scaffold-ETH 2",
  openGraph: {
    title: {
      default: "Scaffold-ETH 2 App",
      template: "%s | Scaffold-ETH 2",
    },
    description: "Built with 🏗 Scaffold-ETH 2",
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
    title: {
      default: "Scaffold-ETH 2",
      template: "%s | Scaffold-ETH 2",
    },
    description: "Built with 🏗 Scaffold-ETH 2",
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
         <ScaffoldApp>{children}</ScaffoldApp>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
