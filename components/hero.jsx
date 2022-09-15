import { Box, Button, chakra, Container, Flex, Heading, LightMode, Stack, Text } from '@chakra-ui/react'

const Hero = () => {
	return (
		<chakra.section>
			<Container>
				<Flex gap={6} h={648}>
					<Flex flex={1}>
						<Stack justify="center" spacing={6}>
							<Heading as="h1" size="4xl" letterSpacing={0} color="default">
								A better life
								<br /> starts with a<br />
								<chakra.span color="blue.500">beautiful smile</chakra.span>
							</Heading>

							<Text fontSize="lg" color="muted">
								Everything in the world has beauty, but not everyone sees it.
								<br /> Every time you smile at someone, it is an act of love.
							</Text>

							<Box>
								<LightMode>
									<Button size="lg" colorScheme="blue">
										Book Now
									</Button>
								</LightMode>
							</Box>
						</Stack>
					</Flex>

					<Flex flex={1} py={6}>
						<Box bgImage="/assets/image-1.jpg" bgSize="cover" bgPos="center" h="full" w="full">
							<svg width="143" height="600" viewBox="0 0 143 600" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M143 0L0 600V0H143Z" fill="white" />
							</svg>
						</Box>
					</Flex>
				</Flex>
			</Container>
		</chakra.section>
	)
}

export default Hero
