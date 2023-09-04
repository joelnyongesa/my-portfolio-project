import { Heading } from "@chakra-ui/react";
import { 
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    Text,
    CardFooter,
    Button,
    ButtonGroup,
    Image,
    Stack,
    Divider,
    Link,
    
 } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

function Portfolio(){
    return(
        // <Heading m={4}>My Work</Heading>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.pexels.com/photos/5898312/pexels-photo-5898312.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        alt='Zero Hunger'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Zero Hunger Project</Heading>
                        <Text>
                            This was a project I created to help end world hunger in Sub-Saharan Africa, where people can donate various amounts to help feed the needy in Kenya.
                        </Text>
                    </Stack>
                </CardBody>

                <Divider />

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link href='https://github.com/joelnyongesa/Phase-1-Project' isExternal>
                        <Button variant='solid' colorScheme='blue'>
                            View entire project  <ExternalLinkIcon mx='2px'/>
                        </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
                </Card>
            </Card>

            
            <Card>
                <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.pexels.com/photos/5849594/pexels-photo-5849594.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        alt='E-Commerce'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>E-Commerce Project</Heading>
                        <Text>
                            An e-commerce project I worked on with various teammates.
                        </Text>
                    </Stack>
                </CardBody>

                <Divider />

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link href='https://github.com/Group-5-Phase-2/Phase-2-Group-Project' isExternal>
                        <Button variant='solid' colorScheme='blue'>
                            View entire project  <ExternalLinkIcon mx='2px'/>
                        </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
                </Card>
            </Card>


                        <Card>
                <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        alt='Celebrity Spy'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Celebrity Spy App</Heading>
                        <Text>
                            An app displaying the most famous Twitter Accounts as of August 2023
                        </Text>
                    </Stack>
                </CardBody>

                <Divider />

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link href='https://github.com/joelnyongesa/celebrity-spy-app' isExternal>
                        <Button variant='solid' colorScheme='blue'>
                            View entire project  <ExternalLinkIcon mx='2px'/>
                        </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
                </Card>
            </Card>
            </SimpleGrid>
    )
}


export default Portfolio;