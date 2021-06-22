import React, {useState} from 'react';

function Counter() {
    let [num, setNum] = useState(3);

    let count = setTimeout(function(){  
        setNum(num = num -1);
    }, 1000);

    if(num == 0){
        clearTimeout(count);
    }

  return (
    <div className="countdown">
      <span>{num}</span>
    </div>
  );
}

export default Counter;