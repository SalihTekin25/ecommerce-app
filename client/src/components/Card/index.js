import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import styles from './styles.module.css'

function Card() {
  return (
    <Stat className={styles.product}>
      <Link to="#/">
        <Image src="https://placebear.com/400/200" alt="product" />
        <StatLabel fontWeight="semibold">Maacbook Air</StatLabel>
        <StatNumber> 1299.99 €</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Link>
    </Stat>

  )
}


export default Card

/*    <Box overflow="hidden" borderWidth="1px" p="3px" borderRadius="lg" >
    
      <Link to="#/">
        <Image src="https://placebear.com/400/200" alt="product" />

        <Box p="6">
          <Box display="plex" alignItems="baseline">
            8/6/2022
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tiht">
            Maacbook Pro
          </Box >
          <Box>
            10000 TL
          </Box>
        </Box>
      </Link>
      <Button colorScheme='teal' variant='solid'>Add to Basket</Button>

    </Box>*/ 