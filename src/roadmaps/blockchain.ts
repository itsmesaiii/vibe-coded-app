import { RoadmapData } from "../types";

export const blockchainRoadmap: RoadmapData = {
  overview:
    "The journey to becoming a Blockchain Developer in 2025 involves learning distributed systems, cryptography, smart contracts, consensus mechanisms, and decentralized applications (dApps). This roadmap takes you through fundamentals, Ethereum & Hyperledger, smart contract development, scaling solutions, security practices, and continuous learning in Web3 technologies.",
  sections: [
    {
      id: "blockchain-fundamentals",
      title: "1. Blockchain Fundamentals",
      emoji: "📚",
      description:
        "Start with the basics: how blockchains work, their architecture, and why decentralization matters.",
      tasks: [
        {
          id: "what-is-blockchain",
          title: "Understand what blockchain is",
          description:
            "Learn distributed ledger technology, immutability, decentralization.",
          resources: [
            { title: "Blockchain Basics (IBM)", url: "https://www.ibm.com/topics/what-is-blockchain" },
          ],
        },
        {
          id: "consensus",
          title: "Learn consensus mechanisms",
          description:
            "Proof of Work, Proof of Stake, Byzantine Fault Tolerance, etc.",
          resources: [
            { title: "Consensus Algorithms Explained", url: "https://medium.com/coinmonks/consensus-algorithms-explained-9f55e3d5f9f5" },
          ],
        },
        {
          id: "public-vs-private",
          title: "Differentiate blockchain types",
          description: "Public, private, consortium, hybrid blockchains.",
          resources: [],
        },
      ],
      nextSections: ["cryptography-blockchain"],
    },
    {
      id: "cryptography-blockchain",
      title: "2. Cryptography for Blockchain",
      emoji: "🔐",
      description:
        "Cryptography ensures security, authenticity, and privacy in blockchains.",
      tasks: [
        {
          id: "hash-functions",
          title: "Learn hash functions",
          description: "SHA-256, Keccak-256, Merkle Trees.",
          resources: [],
        },
        {
          id: "public-key-crypto",
          title: "Understand public key cryptography",
          description: "Private keys, public keys, digital signatures.",
          resources: [],
        },
        {
          id: "wallets",
          title: "Understand wallets",
          description: "Hot wallets, cold wallets, key storage.",
          resources: [],
        },
      ],
      nextSections: ["ethereum-basics"],
    },
    {
      id: "ethereum-basics",
      title: "3. Ethereum and Smart Contracts Basics",
      emoji: "⛓️",
      description:
        "Ethereum is the most popular platform for dApps. Learn its fundamentals and smart contract development.",
      tasks: [
        {
          id: "ethereum-architecture",
          title: "Learn Ethereum architecture",
          description: "EVM, gas, accounts, transactions, blocks.",
          resources: [
            { title: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/" },
          ],
        },
        {
          id: "solidity-basics",
          title: "Learn Solidity",
          description: "Data types, functions, modifiers, events, storage vs memory.",
          resources: [
            { title: "Solidity Docs", url: "https://docs.soliditylang.org/" },
          ],
        },
        {
          id: "smart-contracts",
          title: "Write your first smart contract",
          description: "Implement a simple contract (Hello World, Storage).",
          resources: [],
        },
        {
          id: "tools",
          title: "Learn development tools",
          description: "Remix IDE, Hardhat, Truffle, Ganache.",
          resources: [],
        },
      ],
      nextSections: ["dapp-development"],
    },
    {
      id: "dapp-development",
      title: "4. Decentralized Application (dApp) Development",
      emoji: "🌐",
      description:
        "Build user-facing applications that interact with smart contracts.",
      tasks: [
        {
          id: "web3",
          title: "Learn Web3.js / Ethers.js",
          description: "Connect frontends to Ethereum using JavaScript libraries.",
          resources: [
            { title: "Ethers.js Docs", url: "https://docs.ethers.org/" },
          ],
        },
        {
          id: "wallet-integration",
          title: "Integrate wallets",
          description: "MetaMask integration, WalletConnect.",
          resources: [],
        },
        {
          id: "dapp-ui",
          title: "Build a simple dApp UI",
          description: "React + Web3.js to interact with contracts.",
          resources: [],
        },
      ],
      nextSections: ["smart-contract-security"],
    },
    {
      id: "smart-contract-security",
      title: "5. Smart Contract Security",
      emoji: "🛡️",
      description:
        "Security is critical in blockchain. Learn vulnerabilities and how to prevent them.",
      tasks: [
        {
          id: "reentrancy",
          title: "Understand reentrancy attacks",
          description: "Classic DAO hack example.",
          resources: [],
        },
        {
          id: "integer-overflow",
          title: "Understand integer overflow/underflow",
          description: "Check SafeMath library and Solidity 0.8 built-in checks.",
          resources: [],
        },
        {
          id: "auditing",
          title: "Learn contract auditing",
          description: "Manual review, MythX, Slither tools.",
          resources: [],
        },
      ],
      nextSections: ["scaling-solutions"],
    },
    {
      id: "scaling-solutions",
      title: "6. Blockchain Scaling Solutions",
      emoji: "⚡",
      description:
        "Learn about scalability challenges and solutions like Layer 2 networks.",
      tasks: [
        {
          id: "sidechains",
          title: "Sidechains and Plasma",
          description: "Polygon, Plasma framework.",
          resources: [],
        },
        {
          id: "rollups",
          title: "Learn Rollups",
          description: "Optimistic Rollups, ZK-Rollups.",
          resources: [],
        },
        {
          id: "sharding",
          title: "Understand sharding",
          description: "Ethereum 2.0 roadmap and sharding principles.",
          resources: [],
        },
      ],
      nextSections: ["other-platforms"],
    },
    {
      id: "other-platforms",
      title: "7. Explore Other Blockchain Platforms",
      emoji: "🧩",
      description:
        "Beyond Ethereum, learn other ecosystems: Hyperledger, Solana, Polkadot, Cosmos.",
      tasks: [
        {
          id: "hyperledger",
          title: "Learn Hyperledger Fabric basics",
          description: "Permissioned blockchain for enterprise.",
          resources: [
            { title: "Hyperledger Fabric Docs", url: "https://hyperledger-fabric.readthedocs.io/" },
          ],
        },
        {
          id: "solana",
          title: "Learn Solana development",
          description: "Rust-based smart contracts, Solana CLI.",
          resources: [],
        },
        {
          id: "polkadot",
          title: "Understand Polkadot and parachains",
          description: "Interoperability, Substrate framework.",
          resources: [],
        },
      ],
      nextSections: ["defi-nfts"],
    },
    {
      id: "defi-nfts",
      title: "8. DeFi, NFTs, and DAOs",
      emoji: "💰",
      description:
        "Learn how decentralized finance, NFTs, and DAOs work — and how to build them.",
      tasks: [
        {
          id: "defi",
          title: "Learn DeFi protocols",
          description: "Uniswap, Aave, Compound.",
          resources: [],
        },
        {
          id: "nfts",
          title: "Build NFTs",
          description: "ERC-721, ERC-1155 standards.",
          resources: [],
        },
        {
          id: "dao",
          title: "Understand DAOs",
          description: "Governance tokens, voting mechanisms.",
          resources: [],
        },
      ],
      nextSections: ["blockchain-tools"],
    },
    {
      id: "blockchain-tools",
      title: "9. Blockchain Development Tools & Infrastructure",
      emoji: "🧰",
      description:
        "Learn DevOps and infra tools to build scalable blockchain apps.",
      tasks: [
        {
          id: "ipfs",
          title: "Learn IPFS",
          description: "Decentralized file storage.",
          resources: [],
        },
        {
          id: "oracles",
          title: "Use Oracles",
          description: "Chainlink for external data.",
          resources: [],
        },
        {
          id: "infra",
          title: "Explore blockchain infra services",
          description: "Infura, Alchemy, QuickNode.",
          resources: [],
        },
      ],
      nextSections: ["blockchain-next-steps"],
    },
    {
      id: "blockchain-next-steps",
      title: "10. Next Steps & Continuous Learning",
      emoji: "🚀",
      description:
        "Blockchain evolves fast. Keep building, contributing, and learning.",
      tasks: [
        {
          id: "hackathons",
          title: "Join Web3 hackathons",
          description: "ETHGlobal, Encode Club hackathons.",
          resources: [],
        },
        {
          id: "opensource",
          title: "Contribute to blockchain open-source",
          description: "Contribute to Ethereum, Polygon, Solana repos.",
          resources: [],
        },
        {
          id: "stay-updated",
          title: "Follow blockchain trends",
          description: "Web3 newsletters, Twitter/X, podcasts.",
          resources: [],
        },
        {
          id: "certifications",
          title: "Optional: Blockchain certifications",
          description: "Certified Blockchain Developer (CBD), Blockchain Council courses.",
          resources: [],
        },
      ],
      nextSections: [],
    },
  ],
};
