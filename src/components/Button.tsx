export default ({
	onClick,
	children,
}: {
	onClick: (e: any) => any
	children: React.ReactNode
}) => {
	return (
		<button
			onClick={onClick}
			className='bg-transparent py-1 px-4 border border-white transition-colors inline-flex'
		>
			{children}
		</button>
	)
}
