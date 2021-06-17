import React from "react";
import "./App.css";
import { useStateValue } from "./StateProvider";

import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import Movements from "./components/Movements";
import Summary from "./components/Summary";
import OperationLoan from "./components/OperationLoan";
import OperationTransfer from "./components/OperationTransfer";
import OperationClose from "./components/OperationClose";
import Footer from "./components/Footer";
function App() {
  const [{ user }] = useStateValue();
  if (user) {
    return (
      <>
        <Navbar />
        <main className="app">
          <Balance />
          <Movements />
          <Summary />
          <OperationLoan />
          <OperationTransfer />
          <OperationClose />
        </main>
        <Footer />
      </>
    );
  }
  return <Navbar />;
}

export default App;
