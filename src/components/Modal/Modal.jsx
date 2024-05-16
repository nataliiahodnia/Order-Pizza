import { useEffect } from 'react'
import Button from '../Button/Button'
import css from './Modal.module.css'
const Modal = ({ children, title = 'Default modal', onClose }) => {
	const handleBackDropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])
	return (
		<div className={css.wrapper} onClick={handleBackDropClick}>
			<div className={css.content}>
				<>
					<h1>{title}</h1>
					<hr />
				</>
				<Button className={css.closeBtn} onClick={onClose}>
					×
				</Button>
				{children}
			</div>
		</div>
	)
}

export default Modal
