import { Flex, Box, Spacer, ButtonGroup, Heading, Button } from "@chakra-ui/react";


function Navbar(){
    return(
        <Flex minWidth='max-content' alignItems='center' gap='2' m={4}>
            <Box p='2'>
                <Heading size='md'>Joel Nyongesa</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2' margin='4'>
                <Button colorScheme='teal' borderRadius='2xl'>About Me</Button>
                <Button colorScheme='teal' borderRadius='2xl'>Portfolio</Button>
                <Button colorScheme='teal' borderRadius='2xl'>Contact Me</Button>
            </ButtonGroup>
        </Flex>
    )
}


export default Navbar;