// src/App.tsx
import React, { useState } from "react";
import Login from "./pages/login";
import DriveUploadDownload from "./pages/drive-upload-download.tsx";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <DriveUploadDownload />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
