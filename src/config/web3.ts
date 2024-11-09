import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo';

const metadata = {
  name: 'Cashflow Quest',
  description: 'Master Your Finances Through Play',
  url: 'https://cashflowquest.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains: [mainnet, sepolia],
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#22c55e',
    '--w3m-border-radius-master': '0.75rem',
  },
});