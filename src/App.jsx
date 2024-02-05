import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  const clickRedHandler=()=>{
    setColor("red")
  }
  const clickGreenHandler=()=>{
    setColor("green")
  }

  const clickYellowHandler=()=>{
    setColor("yellow")
  }

  const clickBlackHandler=()=>{
    setColor("black")
  }
  
  const clickOrangeHandler=()=>{
    setColor("Orange")
  }

  
  const clickBlueHandler=()=>{
    setColor("Blue")
  }

  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    > <div className='justify-center  '>
          <h2>HII  my name is ravi</h2>

    </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0   px-2'> 

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ' > 
        <button className='outline-none rounded-full px-4 py-1  text-white' onClick={clickRedHandler} style={{backgroundColor:"red"}}>red</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white ' onClick={clickGreenHandler} style={{backgroundColor:"green"}}>green</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white ' onClick={clickYellowHandler} style={{backgroundColor:"yellow"}}>yellow</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white ' onClick={clickBlackHandler} style={{backgroundColor:"Black"}}>Black</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white ' onClick={clickOrangeHandler} style={{backgroundColor:"Orange"}}>Orange</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white ' onClick={clickBlueHandler} style={{backgroundColor:"blue"}}>Blue</button>

        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white ' onClick={()=>(setColor("purple"))} style={{backgroundColor:"purple"}}>Purple</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-black ' onClick={()=>(setColor("pink"))} style={{backgroundColor:"pink"}}>Pink</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-black ' onClick={()=>(setColor("white"))} style={{backgroundColor:"white"}}>White</button>
        <button className='outline-none rounded-full shadow-lg px-4 py-1 text-black ' onClick={()=>(setColor("grey"))} style={{backgroundColor:"grey"}}>Grey</button>

        








        

      </div>

      </div>

    </div>
    
    
  )
}

export default App
