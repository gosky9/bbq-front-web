import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
// import Bbq from './artifacts/contracts/Bbq.sol/Bbq.json'

function App() {
  // store 要投资的数目 in local state
  let provider;
  const [contractBalance, setContractBalance] = useState("?");
  const [account, setAccount] = useState("Connect Wallet");
  const [userWalletBalance, setUserWalletBalance] = useState("?");
  const [yourBeefBalance, setYourBeefBalance] = useState("?");
  const [inputValue, setInputValue] = useState(0);

  console.log("provider", provider);
  const bbqAddress = "0xA5fd5cA3E8a8D3c402983d753da0aA8113555Dd2";
  const bbqAbi = [
    {
      constant: true,
      inputs: [],
      name: "ceoAddress",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getMyMiners",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "initialized",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "rt",
          type: "uint256",
        },
        {
          name: "rs",
          type: "uint256",
        },
        {
          name: "bs",
          type: "uint256",
        },
      ],
      name: "calculateTrade",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "eth",
          type: "uint256",
        },
        {
          name: "contractBalance",
          type: "uint256",
        },
      ],
      name: "calculateEggBuy",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "marketEggs",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "sellEggs",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "amount",
          type: "uint256",
        },
      ],
      name: "devFee",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "seedMarket",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "ref",
          type: "address",
        },
      ],
      name: "hatchEggs",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getMyEggs",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "lastHatch",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "claimedEggs",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "hatcheryMiners",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "EGGS_TO_HATCH_1MINERS",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "eth",
          type: "uint256",
        },
      ],
      name: "calculateEggBuySimple",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "eggs",
          type: "uint256",
        },
      ],
      name: "calculateEggSell",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "referrals",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "adr",
          type: "address",
        },
      ],
      name: "getEggsSinceLastHatch",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "ref",
          type: "address",
        },
      ],
      name: "buyEggs",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
  ];

  async function connectWallet() {
    console.log(1);
    provider = new ethers.providers.Web3Provider(window.ethereum);
    let data = await requestAccount();
    setAccount(data[0]);
    getContractBalance();
    getWalletBalance();
    compoundInvest();
  }
  // 获取账户
  async function requestAccount() {
    return await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  connectWallet();

  // 获得合约余额
  async function getContractBalance() {
    if (typeof window.ethereum !== "undefined") {
      // let provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(bbqAddress, bbqAbi, provider);
      try {
        console.log(22);
        console.log(provider);
        const data = await contract.getBalance();
        console.log("国库余额为: ", ethers.utils.formatEther(data), "BNB");

        setContractBalance(ethers.utils.formatEther(data));

        // setContractBalance(ethers.utils.formatEther(data))
        // console.log("contractBalance: ",contractBalance)
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // 获取your beef
  async function compoundInvest() {
    let contract = new ethers.Contract(bbqAddress, bbqAbi, provider);
    //
    let tx = await contract.getEggsSinceLastHatch(account);
    // let tx = await contract.getEggsSinceLastHatch("0x3E41D3C48797d58833BAF185bC06D6B20030AC83");
    console.log("Your Rewards: ", ethers.utils.formatEther(tx));
    setYourBeefBalance(ethers.utils.formatEther(tx));
  }

  // 获取用户钱包余额
  async function getWalletBalance() {
    // let provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(bbqAddress, bbqAbi, provider);
    let account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("account[0]", account[0]);

    provider.getBalance(account[0]).then((balance) => {
      let etherString = ethers.utils.formatEther(balance);
      console.log("Balance: " + etherString);
      setUserWalletBalance(etherString);
    });
    console.log("first,", userWalletBalance);
  }
  // 烤土豆 invest
  async function invest() {
    let contract = new ethers.Contract(
      bbqAddress,
      bbqAbi,
      provider.getSigner()
    );
    let overrides = {
      value: ethers.utils.parseEther("0.1"),
      // value: ethers.utils.parseEther(toString(inputValue)),
    };
    let refAddress = "0x0DAc4F07014844d711Bf6d4528567D7206230090";
    console.log(1);
    let tx = await contract.buyEggs(refAddress, overrides);
    console.log(tx);
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="header">
            {/* 这里是上面那部分 */}
            {/* 链接钱包，烤牛肉图片，三个连接 */}
            <div className="walletWrapper" onClick={connectWallet}>
              <span className="address">{account}</span>
            </div>
          </div>

          <div className="home">
            <img
              className="logo"
              src="https://roastedbeef.io/static/media/logo.cd8c5573.png#"
              alt="logo"
            />
            <p className="slogan">
              The BNB Reward Pool with the 10% daily return and 13% referral
              rewards and lowest dev fee
            </p>

            {/* 白皮书 审计报告</div> */}
            <div className="mainContent">
              <div className="box leftBox">
                <div className="dataRow">
                  <div className="name">Contract</div>
                  {/* <div className="value"> BNB</div> */}
                  <div className="value">{contractBalance} BNB</div>
                </div>
                <div className="dataRow">
                  <div className="name">Wallet</div>
                  {/* <div className="value"> BNB</div> */}
                  <div className="value">{userWalletBalance} BNB</div>
                </div>
                <div className="dataRow">
                  <div className="name">Your Beef</div>
                  <div className="value">{yourBeefBalance} BNB</div>
                </div>
                <span className="ant-input-affix-wrapper antInput">
                  {/* <input className="ant-input" type="text" value={inputValue}  onChange={setInputValue(event.target.value)}/> */}
                  <input
                    className="ant-input"
                    type="text"
                    defaultValue={inputValue}
                    onChange={(event) => setInputValue(event)}
                  />

                  <span className="ant-input-suffix">
                    <span className="suffix">BNB</span>
                  </span>
                </span>

                <div className="buyButton" onClick={invest}>
                  ROAST BEEF
                </div>
                <div className="actionWrapper">
                  <div className="dataRow">
                    <div className="name">Your Rewards</div>
                    <div className="value">
                      <span>0.000000BNB</span>
                    </div>
                  </div>
                  <div className="actionButtons">
                    <div>RE-ROAST</div>
                    <div>EAT BEEF</div>
                  </div>
                </div>
              </div>

              {/* ------------- */}
              <div className="box rightBox">
                <div className="contractInfo">
                  <img src="https://roastedbeef.io/static/media/grill.9817a163.png" alt="grill" />
                  <div className="data">
                    <h1>Nutrition Facts</h1>
                    <div class="dataRow">
                      <div class="name">Daily Return</div>
                      <div class="value">10%</div>
                      </div>
                      <div class="dataRow">
                        <div class="name">APR</div>
                        <div class="value">3650%</div>
                      </div>
                      <div class="dataRow">
                        <div class="name">Dev Fee</div>
                        <div class="value">3%</div>
                      </div>
                    
                  </div>
                </div>
                {/* --------------- */}
                <div class="referral">
                  <h1>Referral Link</h1>
                  <p>
                    Earn 13% of the BNB used to roast beef from anyone who uses
                    your referral link
                  </p>
                  <div class="refWrapper">
                    <div class="referralLink">
                      https://roastedbeef.io/#/?ref=0x0dac4f07014844d711bf6d4528567d7206230090
                    </div>
                    <div class="copyButton">COPY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button >Fetch Greeting</button> */}

          {/* <button onClick={setGreeting}>Set Greeting</button> */}
          {/* <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" /> */}
        </div>
      </div>
    </>
  );
}

export default App;
