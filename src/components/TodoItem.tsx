import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps = {
    todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
    const {
        id,
        text,
        done,
    } = todo;
    const {
        onToggle,
        onRemove,
    } = useTodoActions(id);

    return (
        <li className={`TodoItem ${done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>{text}</span>
            <span className="remove" onClick={onRemove}>(X)</span>
        </li>
    );
}

export default TodoItem;
