import { Center, FormControl, Input, Button, useToast } from '@chakra-ui/react'
import { GiWarlockEye } from 'react-icons/gi'

export default function bearings3() {
  const toast = useToast()

  return (
    <Center gap={2}>
        <FormControl w={200} pl={4}>
        <Input type='password' placeholder="Enter your code" />
        </FormControl>
        <Button
            variant="outline"
            colorScheme='yellow'
            type='submit'
            onClick={() =>
            toast({
            title: 'Error.',
            description: "Nope. Try again.",
            status: 'error',
            duration: 9000,
            isClosable: true,
            })
        }
        >
            <GiWarlockEye />
        </Button>
    </Center>
  )
}