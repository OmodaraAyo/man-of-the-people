import React from "react";
import Account from "../pages/Account";

const LandingPage = () => {
  return (
    <header className="min-h-screen flex flex-col">
      <main className="flex-grow pt-40">
        <Account />
      </main>
    </header>
  );
};

export default LandingPage;
