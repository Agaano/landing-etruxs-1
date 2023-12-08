import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header
				nav={[
					{ title: 'Главная', src: 'https://youtube.com' },
					{ title: 'О нас', src: '#' },
				]}
			/>
			<section>
				<img src='https://cs7.pikabu.ru/post_img/big/2017/11/30/6/1512034306160616164.jpg' />
				<div className='section-content-wrapper'>
					<div className='section-content'>
						<h1>Отдохните с комфортом</h1>
						<h2>И без проблем</h2>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
