import { chakra, Container } from '@chakra-ui/react'
import FooterHeader from './content'

const Footer = () => {
	return (
		<chakra.footer>
			<Container>
				<FooterHeader />
			</Container>
		</chakra.footer>
	)
}

export default Footer
