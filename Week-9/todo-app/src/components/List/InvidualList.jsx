import React, { useContext } from 'react'
import { TodoListContext } from '../../Context/context';
import DeleteIcon from '@mui/icons-material/Delete';
import {ListItem, ListItemButton, ListItemIcon, ListItemText,Checkbox, IconButton} from '@mui/material';

const InvidualList = ({todo}) => {
    const { deleteTodo, markTodo } = useContext(TodoListContext);
    const {id, todo_item, date,complete} = todo;
    const deleteHandler = (id) => {
        deleteTodo(id);
    }
    const markTodoHandler = (id) => {
        markTodo(id);
    }
    const overdue = new Date(Date.now()) > new Date(date);
  return (
    
        <ListItem
        key={id}
        secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={() => deleteHandler(id)}>
            <DeleteIcon />
            </IconButton>
        }
        divider
        >
        <ListItemButton role={undefined} onClick={() => {markTodoHandler(id)}} >
            <ListItemIcon>
            <Checkbox
                edge="start"
                checked={complete}
            />
            </ListItemIcon>
            <ListItemText style={{textDecoration:complete?'line-through':'none'}} id={todo_item} primary={todo_item} secondary={date}/>
            {overdue && <ListItemText disableTypography style={{color:"red"}} id={todo_item} secondary="Overdue" />}
        </ListItemButton>
        </ListItem>
  )
}

export default InvidualList