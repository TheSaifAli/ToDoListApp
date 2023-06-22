import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

const TodoList = (props) => {
  return (
    <div className='text-white shadow-md bg-blue-900 my-1 rounded px-5 text-md flex space-x-3 items-center h-8' ><AiFillCloseCircle onClick={()=>{props.onCloseClick(props.id)}}className='hover:text-red-500 cursor-pointer'/><li >{props.itemval}</li></div>
  )
}

export default TodoList
