import { useState } from 'react'
import Logo from '../assets/Logo.svg'
import BurgerMenu from './BurgerMenu'

type headerProps = {
	nav: Array<{ title: string; src: string }>
}

export default ({ nav }: headerProps) => {
	const [isBurgerOpen, setBurgerOpen] = useState(false)

	return (
		<>
			<header className='header'>
				<div>
					<a href='/' className='flex items-center gap-x-1'>
						<img src={Logo} width={50} height={50}></img>
						<span>EtruxS</span>
					</a>
					<button
						className={`burger-wrapper ${isBurgerOpen ? 'opened' : ''}`}
						onClick={() => setBurgerOpen(prev => !prev)}
					>
						<div className='burger-line'></div>
						<div className='burger-line'></div>
						<div className='burger-line'></div>
					</button>
				</div>
			</header>
			<BurgerMenu open={isBurgerOpen} setOpen={setBurgerOpen} />
		</>
	)
}
