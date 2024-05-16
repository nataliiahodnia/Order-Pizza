import { usePizza } from '../../store/hooks';
import css from './PizzaItem.module.css'

export const PizzaItem = ({ pizza }) => {
	const { addToCart } = usePizza()
	return (
		<li className='card card-compact bg-base-100 shadow-xl'>
			<figure>
				<img src={pizza.img} alt={pizza.title} />
			</figure>
			<div className='card-body'>
				<h2 className='text-2xl text-center font-bold'>{pizza.title}</h2>
				<p className={css.cartText}>Ціна: {pizza.price} грн.</p>
				<p className={css.cartText}>Вага: {pizza.weight} гр.</p>
				<p className={css.cartText}>Розмір: {pizza.size} см.</p>

				<div className='card-actions justify-end'>
					<button onClick={() => addToCart(pizza)} className={css.btnAddItem}>
					Add to cart
					</button>
				</div>
			</div>
		</li>
	)
}
