import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import "../css/Todo.css"
import { useState } from "react";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { deleteTodo, uptateTodo } from "../redux/slice/todoSlice"

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;

    const [edit, setEdit] = useState<boolean>(false);

    const [editTodo, setEditTodo] = useState<string>(content);

    const dispatch = useDispatch();

    const editable = () => {

        const request: TodoType = {
            id: id,
            content: editTodo,
        }
        dispatch(uptateTodo(request))
        setEdit(false)
    }

    const deleteTodoFunc = () =>{

        const request :number = id
        
        dispatch(deleteTodo(request))

    }

    return (
        <div className="todo">
            <div>
                {edit ? <input value={editTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTodo(e.target.value)} className="todo-input" /> : <div>{content}</div>}
            </div>
            <div className="todo-icons">

                {edit ? <FaCheck className="todo-icon" onClick={editable} /> : <FaEdit className="todo-icon" onClick={() => setEdit(true)} />}

                <IoIosRemoveCircle className="todo-icon" onClick={deleteTodoFunc}/>
            </div>
        </div>
    )
}

export default Todo
