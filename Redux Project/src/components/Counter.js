import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
//import { INCREMENT, DECREMENT, INCREASE, TOGGLE } from '../store';
import { counterActions } from '../store/counter-slice';


const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.counter);
	const show = useSelector(state => state.counter.showCounter);

	const incrementHandler = () => {
		//dispatch({ type: INCREMENT });
		dispatch(counterActions.increment());
	};
	const increaseHandler = (e) => {
		//dispatch({ type: INCREASE, amount: parseInt(e.target.value) });
		dispatch(counterActions.increase(parseInt(e.target.value)));
	};
	const decrementHandler = () => {
		//dispatch({ type: DECREMENT });
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		//dispatch({ type: TOGGLE });
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button value={5} onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
