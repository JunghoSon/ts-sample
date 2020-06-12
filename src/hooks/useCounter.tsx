import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    increase,
    decrease,
    increaseBy
} from '../modules/counter';
import { RootState } from '../modules';
import { useCallback } from 'react';

export default function useCounter() {
    const { count } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onIncreaseBy = useCallback((diff: number) => dispatch(increaseBy(diff)), [dispatch]);

    return {
        count,
        onIncrease,
        onDecrease,
        onIncreaseBy,
    };
};
