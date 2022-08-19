import React, { useEffect, useState } from 'react';
import UseEffectExample from './UseEffectExample';

function UseEffectRoomComp() {
  const [showComp, setShowComp] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setShowComp(false)
    },1000)
  },[])
    return (
      <div className="App">
        {showComp && <UseEffectExample></UseEffectExample>}
      </div>
    );

  
}

export default UseEffectRoomComp;
