import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList() {
    const todosLosItems=[
        {id:0, description:"Ver la sesión #06" ,isDone:true},
        {id:1, description:"Hacer el componente práctico", isDone:false},
        {id:2, description:"Guardar cámbios", isDone:false}
    ]
    const userTipe="User"
    return (
    <>     
        <span>Pendientes: 03.</span>
        <ul className="card">
            {todosLosItems?.map(item=>(
                <TodoItem
                key={item.id} 
                description={item.description} 
                isDone={item.isDone}
            />))}
        </ul>

        {userTipe=="Admin"&&<button>Eliminar todas las tareas</button>}
    </>
  )
}
