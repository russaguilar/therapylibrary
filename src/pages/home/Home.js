import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export default function Home() {

    const {data, isPending, error} = useFetch('http://localhost:3000/exercises')
  return (
    <div>
        <h1 className='page-title'>Homepage</h1>
        {isPending && <p>Content loading...</p>}
        {error && <p>{error}</p>}
        {data && data.map((ex) => (
            <div className='card'>
                <h3>{ex.name}</h3>
                <ul>{ex.method[0]}</ul>
            </div>
        ))}
    </div>
  )
}
