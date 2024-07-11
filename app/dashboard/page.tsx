"use client";
import React, {useState} from 'react'
import SearchSec from './_components/SearchSec'
import TemplatesList from './_components/TemplatesList'


function Dashboard() {
  const [userSearchInput,setUserSearchInput] = useState<string>()
  return (
    <div>
      <SearchSec onSearchInput={(value:string)=>setUserSearchInput(value)

      }/>


      <TemplatesList userSearchInput={userSearchInput}/>


    </div>
  )
}

export default Dashboard