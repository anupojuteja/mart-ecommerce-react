import React,{useState} from 'react'

const Header = () => {
    const [count,setCount] = useState(0)
    console.log(count)
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+4)}>increment</button>
        <button onClick={()=>setCount(count-4)}>decrement</button>
        
      
    </div>
  )
}

export default Header
