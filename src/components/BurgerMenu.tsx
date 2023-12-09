const menu = [
	{ title: 'Главная', src: '#' },
	{ title: 'О нас', src: '#' },
	{ title: 'Контакты', src: '#' },
	{ title: 'Форма заявки', src: '#' },
]
export default ({
	open,
	setOpen,
}: {
	open: boolean
	setOpen: (open: boolean) => void
}) => {
	return (
		<>
			<menu className={`${open ? 'opened' : ''}`}>
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
			<div
				className={`menu_overlay ${open ? 'opened' : ''}`}
				onClick={() => setOpen(false)}
			></div>
		</>
	)
}
