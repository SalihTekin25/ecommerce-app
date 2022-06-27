import { Grid } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Card'
import {useQuery } from 'react-query'


function Products() {

  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://localhost:3000/product').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message

   console.log(data)

  return (
    <div>
      <Card />
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  )
}

export default Products
