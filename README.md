# EazyWeb3

## ✨ Inspiration

Traditional finance often involves lock-up periods and complex processes for earning yield on excess funds. However, leveraging account abstraction (ERC-4337) and a user-friendly login experience, organizations can easily start investing without requiring prior Externally Owned Accounts.

## 👀 What it does

This project enables seamless investment in digital strategies for individuals and organizations. Organizations can log in with their company email, choose from various investment strategies (low risk, medium risk, high risk), and automate them to optimize yield. Wealthsimpler has implemented one such strategy investing funds above a minimum balance in Compound. Future implementations can expand to include a wide selection of protocols -aave, staked eth etc.. The ERC-4337 account abstraction eliminates the need to understand Ethereum gas fees and removes concerns about private key loss or hacking leading to investment loss. We also integrated with Airstack to create stunning DeFi market visuals through graphs and tables, to guide users when making investments.

## 💻 How we built it

### Frontend:

The frontend is built using React + TypeScript and served by Vite. Login functionality is implemented with Auth0. Upon login, an externally owned wallet is generated using a manual web3Auth approach. We interact with smart contracts in the client using Ethers.js. We used the Airstack API in conjunction with D3.js to create data visualizations of market information like (Polygon token trades/ OpenSea trading volume etc.).

### Backend:

WealthSimpler is an exceptional project built on the foundation of Biconomy's Smart Contract Wallet contracts, which we skillfully forked and customized. Our remarkable modifications have unlocked groundbreaking capabilities within the backend, allowing for the seamless integration of multiple signers with diverse permission levels. Moreover, our system boasts an ingenious automation logic that is triggered at regular intervals, such as hourly or daily.

## 🚀 Accomplishments that we're proud of

One of the most impressive aspects of WealthSimpler lies in its ability to optimize the utilization of excess USDC balances. Through our innovative approach, we ensure that these surplus funds are intelligently invested in low-risk yield-generating protocols meticulously chosen from a range of preselected investment strategies. Leveraging the power of ERC-4337, which provides advanced account abstraction, we have created a remarkably modular design that empowers account owners to personalize their investment journey by selecting from an array of strategies tailored to their individual preferences.

What truly sets WealthSimpler apart from its peers is its exceptional capability to seamlessly incorporate diverse permissioning schemes, roles, and wallet-based code for automated fund investment. By affording users the flexibility to customize their permission settings and take advantage of automated fund management, we have revolutionized the way individuals can optimize their financial portfolios. The sophisticated architecture, robust security measures, and meticulous attention to detail make WealthSimpler an impressive and groundbreaking project in the realm of finance technology.

## 🛠️ Challenges encountered

* Forking and customizing Biconomy's Smart Contract Wallet

* Implementing multiple signers

* Integrating with yield-generating protocols and investment strategies

## 📄 Links

[Presentation Link]()

## 🧑‍💻 Instructions for running locally

### Smart Contract

1. Ensure `foundry` is installed
2. Run the following command to deploy the Smart Contracts on Polygon Mumbai<br/>

```
forge script script/DeployAccount.s.sol:DeployAccount --chain-id 80001 --rpc-url <POLYGON-MUMBAI-RPC-URL> --etherscan-api-key <API-KEY> --verifier-url https://api.polygonscan.com/api --private-key <PRIVATE KEY> --broadcast --verify -vvvv --legacy
```

### Frontend

1. Navigate to the `frontend` directory
2. Install all dependencies using `npm install`
3. Run `npm run dev` to launch the frontend dApp
