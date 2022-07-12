import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const itemsCounter = useSelector(state => state.itemsCounter);
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<button onClick={handleToggle} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{itemsCounter}</span>
		</button>
	);
};

export default CartButton;
