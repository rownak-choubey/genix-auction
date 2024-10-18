import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";

const App: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLoginPopup = () => {
    setLoginModalOpen(true);
  };

  return (
    <div>
      <Navbar handleLoginPopup={handleLoginPopup} />
    </div>
  );
};

export default App;
