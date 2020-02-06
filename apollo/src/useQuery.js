import ApolloClient, { gql } from 'apollo-boost'
import React, { useState } from 'react'
import { render } from 'react-dom'
import { ApolloProvider, useQuery, useLazyQuery } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
})

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
        currency
      }
      }
    `
  })
  .then(result => console.log(result))

const EXCHANGE_RATES = gql`
  {
    rates(current: "USD") {
      currency
      rate
    }
  }
`
const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

const GET_DOG = gql`
  {
    dogs {
      id
      breed
    }
  }
`
const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = use(GET_DOG)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <select name='dog' onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  )
}

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`
const DogPhoto = ({ breed }) => {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    skip: !breed,
    pollInterval: 500,
  })

  if (loading) return null
  if (error) return `Error! ${error}`

  return (
    <div>
      <img src={data.dog.displayImage} alt='' style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  )
}

const DelayedQuery = () => {
  const [dog, setDog] = useState(null)
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO)

  if (loading) return <p>Loading...</p>
  if (data && data.dog) {
    setDog(data.dog)
  }

  return (
    <div>
      {dog && <img src={dog.displayImage} alt='' />}
      <button onclick={() => getDog({ variables: { breed: 'bulldog' } })}>
        Click me!
      </button>
    </div>
  )
}



const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My second Apollo App</h2>
    </div>
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))