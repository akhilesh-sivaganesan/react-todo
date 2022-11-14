import React from 'react';
import { useEffect, useState } from "react";

import Task from './Task.js';

const TaskList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <Task todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
        </div>
    );
};

export default TaskList;