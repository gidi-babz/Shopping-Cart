import { useDispatch } from 'react-redux';

import { cartSliceActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();

	const showCartHandler = () => {
		dispatch(cartSliceActions.toggleCart());
	};

	return (
		<button className={classes.button} onClick={showCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
