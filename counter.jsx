import React,{useState} from'react';
const Counter=()=>{const[count,setCount]=useState(0);
return(<div><h1>Counter</h1><button onclick={()=>setCount(count+1)}>+</button>
    </div>);
};
export default Counter