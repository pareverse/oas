import { useState, useEffect } from 'react'
import { chakra } from '@chakra-ui/react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const AppLayout = ({ children }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		mounted && (
			<>
				<Header />
				<chakra.main>{children}</chakra.main>
				<Footer />
			</>
		)
	)
}

export default AppLayout
