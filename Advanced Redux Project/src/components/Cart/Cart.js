import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

	const cartItems = useSelector(state => state.items);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{/*<CartItem
					item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
				/>*/}
				{cartItems.map(item => (
					<CartItem key={item.title} item={{ title: item.title, quantity: item.amount, total: item.amount * item.price, price: item.price }} />
				))}
			</ul>
		</Card>
	);
};

export default Cart;
