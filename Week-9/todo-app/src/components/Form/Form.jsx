import React, { useState, useContext } from 'react'
import { TodoListContext } from '../../Context/context';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import {FormControl, Button, InputLabel, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './Form.css';

const formatDate = (date) => {
    const d = new Date(date);
    let month = `${d.getMonth()+1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();
    if(month.length<2){
        month = `0${month}`;
    }
    if(day.length < 2){
        day=`0${day}`;
    }

    return [year, month, day].join('-')
}

const initialState = {
    id:'',
    todo_item:'',
    complete:false,
    date:formatDate(new Date()),
}

const Form = () => {    
    const [formData, setFormData] = useState(initialState);

    const {addTodo} = useContext(TodoListContext);
    const submitHandler = (event) => {
        event.preventDefault();
        if(formData.todo_item !== ''){
            let final_todo = {...formData, id:uuidv4()}
            addTodo(final_todo);

        }
    }
  return (
    <div className="form">
       <FormControl sx={{margin:"20px"}}>
            <InputLabel htmlFor="Todo" />
            <TextField
            label="Task"
            id="todo-item"
            defaultValue={formData.todo_item}
            onChange={(event) => setFormData({...formData, todo_item:event.target.value})}
            />
            <br />
            <LocalizationProvider sx={{margin:"10px "}}dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                    label="Deadline"
                    value={formData.date}
                    onChange={(newVal) => {setFormData({...formData, date:dayjs(newVal).format('YYYY-MM-DD')})}}
                    renderInput={(params) => <TextField {...params} />}
                    />

            </LocalizationProvider>
            
        <Button variant="contained" onClick={(e) => {submitHandler(e)}}>Submit</Button>
        </FormControl> 

    </div>
  )
}

export default Form