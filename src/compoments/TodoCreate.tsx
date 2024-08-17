import { useDispatch } from "react-redux"
import "../css/TodoCreate.css"
import { useState } from "react"
import { TodoType } from "../types/Types"
import { createTodo } from "../redux/slice/todoSlice"


function TodoCreate() {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if(newTodo.trim().length == 0){
            alert("Todo Giriniz!")
            return;
        }

        const payload: TodoType = {
            id : Math.floor(Math.random()*9999999),
            content: newTodo,
        }

        dispatch(createTodo(payload));
        setNewTodo('');

    }


    return (
        <div className="todo-create">
            <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)} className="todo-input" placeholder="Todo Giriniz..." />
            <button onClick={handleCreateTodo} className="todo-bt">
                Oluştur
            </button>
        </div>
    )
}

export default TodoCreate
