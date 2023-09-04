import { Heading , Box, Text, Highlight} from "@chakra-ui/react";


function About(){
    return(
        <Box maxW='32rem' m={4}>
            <Heading mb={4}>Software Developer</Heading>
            <Text fontSize='xl'>
                <Highlight
                query={['Vanilla JS', 'React']}
                styles={{px:'2', py: '1', rounded:'full',bg:'teal.100'}}>
                Hi. My obsession with computers began way earlier in my young age. After completing my university studies, where I majored in an undegraduate in Mathematics and Computer Science, I opted in to Moringa School's software engineering class in July 2023. This was a massive opportunity to get my hands dirty and delve deep into code.
                My tech stack includes Vanilla JS and React.
                </Highlight>

            </Text>
        </Box>
    )
}

export default About;