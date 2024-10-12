import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { Col, Layout, Row } from "antd";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider, useWallet } from "@aptos-labs/wallet-adapter-react";
// import { PetraWallet } from "petra-plugin-wallet-adapter";
// import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import React from "react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
const ConnectAptos = () => {
  const wallets = [new PetraWallet()];
  const { account } = useWallet();
  const { signAndSubmitTransaction } = useWallet();
  const aptosConfig = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(aptosConfig);

  return (
    <div className="w-full scale-50 flex-col items-center justify-center  bg-green-100/40 absolute z-50 ">
      <WalletSelector  />
      <div className="text-xs
      
      " >{account!=null && account.address}</div>
    </div>
    // <Layout>
    //   <Row align="middle">
    //     <Col span={10} offset={2}>
    //       <h1>Our todolist</h1>
    //     </Col>
    //     <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
    //       <h1>Connect Wallet</h1>
    //       <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
    //         <WalletSelector />
    //       </Col>
    //     </Col>
    //   </Row>
    // </Layout>
  );
};
export default ConnectAptos;
