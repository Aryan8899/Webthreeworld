import React from "react";
import Nav from "./Comp/Nav";
import New from "./Comp/New" // Correct the import statement and use uppercase 'Nav'
import CryptoTable from "./Comp/CryptoTable";
import Left from "./Comp/Leftover";
import Foot from "./Comp/Fotter";

function App() {
  return (
    <div>
      <Nav />
       <New/>{/* Render the Nav component using JSX syntax */}
       <CryptoTable/>
       <Left/>
       <Foot/>
    </div>
  );
}

export default App;
