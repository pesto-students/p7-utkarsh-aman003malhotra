import React, { useContext } from 'react'
import { TodoListContext } from '../../Context/context';
import InvidualList from './InvidualList';
import List from '@mui/material/List';

const TodoList = () => {
    const {todos} = useContext(TodoListContext);
    
  return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, margin:"20px auto" ,color:"white"}}>
        { todos.map((todo) => (
            <InvidualList key={todo.id} todo={todo} />
        ))}
        </List>
    </div>
  )
}

export default TodoList;