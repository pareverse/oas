import NextLink from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Avatar, Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'

const Google = () => {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_401_307)">
				<path d="M17.8245 9.20731C17.8245 8.59552 17.7749 7.98041 17.6691 7.37854H9.18002V10.8443H14.0413C13.8396 11.962 13.1914 12.9508 12.2423 13.5792V15.8279H15.1426C16.8457 14.2604 17.8245 11.9455 17.8245 9.20731Z" fill="#4285F4" />
				<path d="M9.17998 18.0006C11.6073 18.0006 13.6544 17.2036 15.1458 15.8279L12.2456 13.5792C11.4387 14.1281 10.397 14.439 9.18329 14.439C6.83532 14.439 4.84451 12.8549 4.13019 10.7252H1.13736V13.0434C2.66519 16.0826 5.77708 18.0006 9.17998 18.0006V18.0006Z" fill="#34A853" />
				<path d="M4.12693 10.7252C3.74993 9.60745 3.74993 8.39709 4.12693 7.27933V4.96112H1.1374C-0.139102 7.5042 -0.139102 10.5003 1.1374 13.0434L4.12693 10.7252V10.7252Z" fill="#FBBC04" />
				<path d="M9.17998 3.56225C10.4631 3.5424 11.7032 4.02523 12.6325 4.9115L15.202 2.34196C13.575 0.814129 11.4155 -0.0258495 9.17998 0.000606499C5.77708 0.000606499 2.66519 1.91867 1.13736 4.96111L4.12689 7.27931C4.83789 5.1463 6.83201 3.56225 9.17998 3.56225V3.56225Z" fill="#EA4335" />
			</g>

			<defs>
				<clipPath id="clip0_401_307">
					<rect width="18" height="18" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

const HeaderContent = () => {
	const { data: session } = useSession()

	console.log(session)

	return (
		<Flex as="nav" justify="space-between" align="center" gap={6} h={16}>
			<Flex justify="start" flex={1}>
				<Image boxSize={8} src="/favicon.png" />
			</Flex>

			<Flex justify="center" flex={3}>
				<Stack display={{ base: 'none', md: 'flex' }} direction="row" align="center" spacing={12}>
					<NextLink href="/" passHref>
						<Text as="a" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
							Home
						</Text>
					</NextLink>

					<Text as="a" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
						Services
					</Text>

					<Text as="a" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
						Blogs
					</Text>

					<Text as="a" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
						About Us
					</Text>

					<Text as="a" href="#contact" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
						Contact Us
					</Text>
				</Stack>
			</Flex>

			<Flex justify="right" flex={1}>
				{session ? (
					<Box>
						<Menu>
							<MenuButton>
								<Avatar size="sm" name={session.user.name} src={session.user.image} />
							</MenuButton>

							<MenuList>
								<MenuItem onClick={() => signOut()}>Log out</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				) : (
					<Button variant="outline" leftIcon={<Google />} onClick={() => signIn('google')}>
						Sign in
					</Button>
				)}
			</Flex>
		</Flex>
	)
}

export default HeaderContent
