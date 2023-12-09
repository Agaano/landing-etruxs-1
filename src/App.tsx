import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

	return (
		<>
			<Header
				nav={[
					{ title: 'Главная', src: 'https://youtube.com' },
					{ title: 'О нас', src: '#' },
				]}
			/>
			<section>
				<div className='img'>
					<h1 className=''>Путешествуйте с нами</h1>
					<h2 className=''>Открывайте новые миры</h2>
				</div>
				<div className='section-content-wrapper'>
					<div className='section-content'>
						<h1 className='title'>Путешествуйте с нами</h1>
						<h2 className='subtitle'>Открывайте новые миры</h2>
						<div className='bricks'>
							<div className='brick'>
								<span className='brick-num'>5</span>
								<span className='brick-p'>Лет на рынке</span>
							</div>
							<div className='brick'>
								<span className='brick-num'>{`>`}3k</span>
								<span className='brick-p'>Клиентов</span>
							</div>
							<div className='brick'>
								<span className='brick-num'>25</span>
								<span className='brick-p'>Стран на ваш выбор</span>
							</div>
							<div className='brick'>
								<span className='brick-num'>98%</span>
								<span className='brick-p'>Положительных отзывов</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
