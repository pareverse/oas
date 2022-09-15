import { Box, Button, chakra, Container, Flex, Heading, Icon, Input, SimpleGrid, Stack, Text, Textarea } from '@chakra-ui/react'
import { Mail, MapPin, PhoneCall } from 'react-feather'
import Card from './card'

const Contact = () => {
	return (
		<chakra.section id="contact" py={24}>
			<Container>
				<Stack align="center" spacing={3}>
					<Heading size="xl" textAlign="center" color="default">
						Contact Us
					</Heading>

					<Text fontSize="lg" color="muted">
						Reach out to us for any inquiry.
					</Text>
				</Stack>

				<Flex gap={6} mt={12} w="full">
					<Flex justify="center" flex={1}>
						<Stack bg="bg-surface" spacing={6} borderRadius="md" shadow="sm" w={400} p={6}>
							<Input placeholder="Full name" />
							<Input placeholder="Email Address" />
							<Textarea placeholder="Message" h="256px" />

							<Button colorScheme="blue">Submit</Button>
						</Stack>
					</Flex>

					<Flex flex={2} bgImage="/assets/map.png" bgSize="cover" bgPos="center" borderRadius="md">
						1
					</Flex>
				</Flex>

				<SimpleGrid columns={3} spacing={6} mt={12}>
					<Card p={6}>
						<Stack direction="row" align="center" spacing={3}>
							<Icon as={MapPin} boxSize={8} />

							<Stack spacing={0}>
								<Text as="h1" fontSize="sm" fontWeight="semibold">
									Location
								</Text>

								<Text fontSize="sm">Las Pinas City</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={3}>
							<Icon as={Mail} boxSize={8} />

							<Stack spacing={0}>
								<Text as="h1" fontSize="sm" fontWeight="semibold">
									Email
								</Text>

								<Text fontSize="sm">jevemillepascual@gmail.com</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={3}>
							<Icon as={PhoneCall} boxSize={8} />

							<Stack spacing={0}>
								<Text as="h1" fontSize="sm" fontWeight="semibold">
									Phone
								</Text>

								<Text fontSize="sm">09123456789</Text>
							</Stack>
						</Stack>
					</Card>
				</SimpleGrid>
			</Container>
		</chakra.section>
	)
}

export default Contact
