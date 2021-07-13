import React, {useState} from 'react';
import styled from 'styled-components';

const CounterBlock = styled.div`
  .countdown{
    margin:4vh 0;
    font-size: 26px;
    font-weight: bold;
  }
`;

function Counter() {
    let [num, setNum] = useState(3);

    let count = setTimeout(function(){  
        setNum(num = num -1);
    }, 1000);

    if(num == 0){
        clearTimeout(count);
    }

  return (
    <CounterBlock>
      <div className="countdown">
         <span>{num}</span>
      </div>
    </CounterBlock>
    
  );
}

export default Counter;