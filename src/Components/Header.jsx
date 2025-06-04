import { Link } from 'react-router-dom'
import logo from 'src\assets\achieversIT.png'
//import '../Componets/Header.css'
export const Header = ({cout})=>{
    return(
        <>
        <div className='headerContainer'>
            <div className='headerImage'>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <nav>
                    <ul className='headerLinks'>
                        <Link to={'/home'}><li>Home</li></Link>
                        <Link to={'/shop'}><li>Shop</li></Link>
                        <Link to={'/cart'}><li>Cart<sup>{cout}</sup></li></Link>
                        <li><i className="fa-solid fa-user"></i></li>
                        <Link to={'/cart'}><li><i className="fa-solid fa-cart-shopping"></i></li></Link>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}





// import React,{useState} from 'react'

// const Header = () => {
//     const [count,setCount] = useState(0)
//     const [name,setName] = useState('')
//     const [isLogged, setIsLogged] = useState(true)
//     const [color, setcolor]= useState()
//     console.log(count)
//   return (
//     <div>

//         <p>{count}</p>
//         <button onClick={()=>setCount(count+4)}>increment</button>
//         <button onClick={()=>setCount(count-4)}>decrement</button>
//         <h3><input type="text" onChange={(e)=>setName(e.target.value)} /></h3>
//         <h1>{name}</h1>
//         <input type={isLogged?'password':'text'}/>
//         <button onClick={()=>setIsLogged(!isLogged)}>show</button>
//         <p style={{backgroundColor:color}}>this is color changing para</p>
//         <button onClick={()=>setcolor('red')}>RED</button>
//         <button onClick={()=>setcolor('pink')}>pink</button>
//         <button onClick={()=>setcolor('green')}>green</button>


      
//     </div>
//   )
// }

// export default Header
