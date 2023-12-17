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
				<div className='img first'>
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
			<section>
				<div className='img img2'>
					<h1 className=''>Широкий выбор направлений</h1>
					<h2 className=''>Открывайте новые миры</h2>
				</div>
				<div className='img img3'>
					<h1 className=''>Выгодные цены</h1>
					<h2 className=''>Позвольте себе отдохнуть</h2>
				</div>
			</section>
			<section>
				<div className='section-content-wrapper'>
					<div className='section-content'>
						<div className='container'>
							<h1>О нас</h1>
							<p>
								Мы - команда профессионалов, которые любят путешествовать и
								хотят помочь другим людям открывать для себя новые горизонты. Мы
								предлагаем широкий выбор туров по всему миру, а также услуги по
								организации индивидуальных поездок.{' '}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='section-content-wrapper'>
					<div className='section-content'>
						<div className='container'>
							<h1>Наши контакты</h1>
							<div className='contacts'>
								<div>
									<img src='/public/vk.svg' /> @idivankov
								</div>
								<div>
									<img src='/public/telegram.svg' /> @tghogho
								</div>
								<div>
									<img src='/public/instagram.svg' /> @tavia
								</div>
								<div>
									<img src='/public/phone.svg' /> +7 (999) 92-22-132
								</div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='section-content-wrapper'>
					<div className='section-content'>
						<div className='form-wrapper'>
							<form>
								<h1>Оставьте вашу заявку!</h1>
								<label>
									Ваш email:
									<input placeholder='Оставьте вашу почту' />
								</label>
								<label>
									Или любые другие ваши контакты:
									<input placeholder='Оставьте вашу почту' />
								</label>
								<button>Отправить</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
