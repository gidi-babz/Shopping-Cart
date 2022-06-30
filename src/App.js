import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
	const cartHidden = useSelector((state) => state.ui.showCart);

	return (
		<Layout>
			{cartHidden && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
