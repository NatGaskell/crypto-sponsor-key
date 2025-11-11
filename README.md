# Crypto Sponsor Key

A decentralized sponsorship deal management platform with encrypted budgets using Fully Homomorphic Encryption (FHE). Built with FHEVM, Hardhat, and Next.js.

## ✨ Features

- 🔐 **Encrypted Budgets**: Sponsor budgets are encrypted using FHE and stored on-chain
- 🤝 **Deal Management**: Create, increase budget, and close sponsorship deals
- 🔓 **Selective Decryption**: Only authorized parties can decrypt budget information
- 🎨 **Modern UI**: Beautiful Next.js frontend with RainbowKit wallet integration
- ⚡ **Real-time Updates**: Automatic refresh and state management
- 🧪 **Fully Tested**: Comprehensive test coverage for contracts and frontend

## 🏗️ Architecture

### Smart Contracts

- **EncryptedSponsorDeal**: Main contract managing encrypted sponsorship deals
- **FHECounter**: Example contract demonstrating FHE operations

### Frontend

- **Next.js 15**: React framework with App Router
- **RainbowKit + Wagmi**: Wallet connection and Web3 integration
- **FHEVM SDK**: Client-side encryption/decryption
- **shadcn/ui**: Modern UI components with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher
- **pnpm**: Package manager (recommended)
- **MetaMask**: Browser wallet extension

### Installation

1. **Clone and install dependencies**

   ```bash
   # Install root dependencies
   pnpm install
   
   # Install frontend dependencies
   cd frontend
   pnpm install
   cd ..
   ```

2. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```bash
   MNEMONIC="your mnemonic here"
   INFURA_API_KEY="your infura api key"
   ETHERSCAN_API_KEY="your etherscan api key"
   ```

3. **Compile contracts**

   ```bash
   pnpm compile
   ```

4. **Run tests**

   ```bash
   pnpm test
   ```

### Local Development

1. **Start local FHEVM node**

   ```bash
   pnpm fhevm:start
   ```

2. **Deploy contracts** (in a new terminal)

   ```bash
   pnpm deploy:local
   ```

3. **Generate ABIs for frontend**

   ```bash
   cd frontend
   pnpm genabi
   ```

4. **Start frontend** (in a new terminal)

   ```bash
   cd frontend
   pnpm dev
   ```

5. **Open browser**

   Navigate to `http://localhost:3000` and connect your MetaMask wallet to localhost network (Chain ID: 31337)

### Deploy to Sepolia

1. **Deploy contracts**

   ```bash
   pnpm deploy:sepolia
   ```

2. **Generate ABIs**

   ```bash
   cd frontend
   pnpm genabi
   ```

3. **Start frontend**

   ```bash
   pnpm dev
   ```

## 📁 Project Structure

```
crypto-sponsor-key/
├── contracts/                      # Smart contracts
│   ├── EncryptedSponsorDeal.sol   # Main sponsorship deal contract
│   └── FHECounter.sol             # Example FHE counter
├── deploy/                         # Deployment scripts
│   ├── 01_deploy_EncryptedSponsorDeal.ts
│   └── deploy.ts
├── test/                           # Contract tests
│   ├── EncryptedSponsorDeal.ts
│   └── FHECounter.ts
├── scripts/                        # Utility scripts
│   ├── createTestDeal.ts
│   └── seedLocalDeal.ts
├── tasks/                          # Hardhat tasks
├── frontend/                       # Next.js frontend
│   ├── app/                       # App router pages
│   │   ├── page.tsx              # Main page
│   │   ├── layout.tsx            # Root layout
│   │   └── providers.tsx         # Web3 providers
│   ├── components/                # React components
│   │   ├── CreateDealButton.tsx
│   │   ├── SponsorshipCard.tsx
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/                     # Custom React hooks
│   │   ├── useEncryptedSponsorDeal.tsx
│   │   ├── useAllDeals.tsx
│   │   └── useFHECounter.tsx
│   ├── fhevm/                     # FHEVM integration
│   │   ├── useFhevm.tsx
│   │   └── FhevmDecryptionSignature.ts
│   ├── abi/                       # Generated contract ABIs
│   └── public/                    # Static assets
├── hardhat.config.ts              # Hardhat configuration
└── package.json                   # Dependencies and scripts
```

## 📜 Available Scripts

### Root Scripts

| Script              | Description                           |
| ------------------- | ------------------------------------- |
| `pnpm compile`      | Compile all contracts                 |
| `pnpm test`         | Run contract tests                    |
| `pnpm deploy:local` | Deploy to local network               |
| `pnpm deploy:sepolia` | Deploy to Sepolia testnet           |
| `pnpm fhevm:start`  | Start local FHEVM node                |
| `pnpm lint`         | Run linting checks                    |
| `pnpm clean`        | Clean build artifacts                 |

### Frontend Scripts

| Script         | Description                    |
| -------------- | ------------------------------ |
| `pnpm dev`     | Start development server       |
| `pnpm build`   | Build for production           |
| `pnpm start`   | Start production server        |
| `pnpm genabi`  | Generate ABIs from contracts   |
| `pnpm test`    | Run frontend tests             |

## � Key Concepts

### Encrypted Sponsor Deals

Each deal contains:
- **Sponsor**: Address of the sponsor
- **Creator**: Address of the deal creator
- **Title**: Deal title
- **Description**: Deal description
- **Encrypted Budget**: FHE-encrypted budget (euint64)
- **Status**: Open or Closed

### FHE Operations

- **Encryption**: Client-side encryption using FHEVM SDK before sending to contract
- **Storage**: Encrypted values stored on-chain as `euint64`
- **Decryption**: User signs a decryption request, relayer decrypts and returns plaintext
- **Privacy**: Only authorized addresses can decrypt specific values

## 🧪 Testing

### Contract Tests

```bash
# Run all contract tests
pnpm test

# Run specific test file
npx hardhat test test/EncryptedSponsorDeal.ts

# Run with gas reporting
REPORT_GAS=true pnpm test
```

### Frontend Tests

```bash
cd frontend
pnpm test
```

## 🛠️ Development Tips

1. **Generate ABIs after contract changes**
   ```bash
   cd frontend && pnpm genabi
   ```

2. **Clear cached signatures**
   - Open browser DevTools → Application → Local Storage
   - Clear items starting with `fhevm_`

3. **Reset local blockchain**
   ```bash
   pnpm clean
   pnpm fhevm:start
   ```

4. **Verify contract on Sepolia**
   ```bash
   npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
   ```

## �📚 Documentation

- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)
- [Next.js Documentation](https://nextjs.org/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs)

## 📄 License

This project is licensed under the BSD-3-Clause-Clear License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🆘 Support

- **FHEVM Issues**: [Zama FHEVM GitHub](https://github.com/zama-ai/fhevm/issues)
- **Documentation**: [FHEVM Docs](https://docs.zama.ai)
- **Community**: [Zama Discord](https://discord.gg/zama)

---

**Built with 🔐 using FHEVM by Zama**
