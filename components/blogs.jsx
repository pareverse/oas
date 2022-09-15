import { chakra, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Card from 'components/card'

const Blogs = () => {
	return (
		<chakra.section pt={24} pb={12}>
			<Container>
				<Stack align="center" spacing={3}>
					<Heading size="xl" textAlign="center" color="default">
						Latest from Our Blog
					</Heading>

					<Text fontSize="lg" color="muted">
						We&apos;d Love For You To Dive Into Some Of Our Carefully Written Pieces.
					</Text>
				</Stack>

				<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt={12} spacing={6}>
					{[...Array(4)].map((data, index) => (
						<Card cursor="pointer" transition=".4s" _hover={{ shadow: 'md' }} key={index}>
							<Image w="full" src="/assets/image-2.jpg" />

							<Stack spacing={3} p={6}>
								<Text fontWeight="semibold" noOfLines={2}>
									What Every Parent Needs To Know About Permanent Teeth
								</Text>

								<Text fontSize="sm" color="muted" noOfLines={3}>
									Every patient who comes into our practice will receive a thorough and comprehensive consultation to start, before any kind of treatment that might be needed.
								</Text>
							</Stack>
						</Card>
					))}
				</SimpleGrid>
			</Container>
		</chakra.section>
	)
}

export default Blogs
