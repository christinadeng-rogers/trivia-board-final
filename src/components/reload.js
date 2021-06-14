// reload button
import React from "react";

function Reload() {

  const refreshPage = ()=>{
     window.location.reload();
  }

  return (
    <div>
      <button onClick={refreshPage} className='btn'>Restart the game</button>
    </div>
  );
}
export default Reload;