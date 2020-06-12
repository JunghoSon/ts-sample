import React, {
    ChangeEvent,
    FormEvent,
    useState,
    useEffect,
} from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import useAddTodo from '../hooks/useAddTodo';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';

function TodoInsert() {
    const [value, setValue] = useState('');
    const addTodo = useAddTodo();
    const { userProfile } = useSelector((state: RootState) => state.github);
    const dispatch = useDispatch();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };

    useEffect(() => {
        dispatch(getUserProfileThunk('JunghoSon'));
    }, [dispatch]);

    console.log(userProfile);

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                type="text"
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default TodoInsert;
