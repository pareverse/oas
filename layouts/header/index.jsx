import { useState, useEffect } from 'react'
import { chakra, Container } from '@chakra-ui/react'
import HeaderContent from './content'

const Header = () => {
	const [isScrolling, setIsScrolling] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				setIsScrolling(window.pageYOffset > 0)
			})
		}
	}, [])

	return (
		<chakra.header bg="bg-surface" position="sticky" top={0} shadow={isScrolling && 'sm'} transition=".4s" zIndex={100}>
			<Container>
				<HeaderContent />
			</Container>
		</chakra.header>
	)
}

export default Header
