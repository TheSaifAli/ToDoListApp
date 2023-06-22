import React, { useState } from 'react'
import TodoList from './TodoList';


const Todo = () => {

    const [inputVal, setInputVal] = useState();

    const [items, setItems] = useState([])

    const onChangeHandle= (e)=>{
        setInputVal(e.target.value);

    }
    const onSubmitHandle =(e)=>{
        e.preventDefault();
        
        setInputVal('');
        if(inputVal === '')
        {
          alert('Please Enter Valid Value')
        }   
        else{
          setItems((prev)=>{
            return[...prev,inputVal]
        })
        }

    }
    const onCloseClick = (id)=>{
      setItems((prev)=>{
        return prev.filter((arrElem,index)=> {
          return index !== id;   
        })
      })
    }
  return (
    <div className=' bg-white shadow-2xl absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-72  md:w-96 h-[28rem] rounded-lg'>
      <div className='bg-blue-900 mt-3 py-1 shadow-md'>
        <h1 className='text-center text-white font-bold text-lg'>ToDo List</h1>
      </div>
      <div className=''>
        <form action="" onSubmit={onSubmitHandle} className='flex flex-col md:flex-row space-y-4 justify-between items-center mx-10 mt-5'>
            <input className='bg-transparent border-b-4 text-center font-semibold text-md py-1 border-b-blue-900 outline-none rounded' placeholder='Add a note' onChange={onChangeHandle} type="text"  value={inputVal}/>
            <button className='text-2xl shadow-md text-white bg-blue-900 w-10 h-10 rounded-full hover:bg-green-700 flex justify-center font-bold' type='submit'>+</button>
        </form>
        <ol className='mt-4 mx-5'>
            {items.map((itemval, index)=>{
               return <><TodoList itemval={itemval}
               key={index} id={index} onCloseClick={onCloseClick}/></>
            })}
        </ol>
      </div>
    </div>
  )
}

export default Todo
