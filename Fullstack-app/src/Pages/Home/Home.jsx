import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Cards from '../../Components/Cards/Cards'


export default function Home() {
  return (
   <>
   <div className='bg-gray-900 min-h-screen'>
    <SearchBar/>
    <Cards/>
   </div>
   </>
  )
}
