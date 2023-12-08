const menu = [
	{ title: 'Главная', src: '#' },
	{ title: 'О нас', src: '#' },
	{ title: 'Контакты', src: '#' },
	{ title: 'Форма заявки', src: '#' },
]
export default ({ open }: { open: boolean }) => {
	return (
		<menu className={`${open ? 'opened' : 'closed'}`}>
			<div className='content'>
				<nav>
					<ul>
						{menu.map(({ title, src }) => {
							return (
								<li>
									<a href={src}>
										<span>{title}</span>
									</a>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</menu>
	)
}
