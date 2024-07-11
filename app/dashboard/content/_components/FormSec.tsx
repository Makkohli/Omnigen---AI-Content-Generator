"use client"
import Image from 'next/image'
import React from 'react'
import {TEMPLATE} from '../../_components/TemplatesList'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Loader2Icon, LoaderCircleIcon, LucideLoader2 } from 'lucide-react'


interface PROPS{
    selectedTemplate?:TEMPLATE
    userFormInput:any
    loading:boolean
}
function FormSec({selectedTemplate,userFormInput,loading}:PROPS) {
  const[formData,setFormData]=useState<any>();
  const onSubmit=(e:any)=>{
    e.preventDefault();
    userFormInput(formData);
  }
  const handleInputChange=(event:any)=>{
  const{name,value}=event.target;
  setFormData({...formData,[name]:value})
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
        {/*@ts-ignore*/}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
    <h2 className='font-bold text-2xl mb-2 text-blue-600'>{selectedTemplate?.name}</h2>
    <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

    <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.from?.map((item,index)=>(
            <div className='my-2 flex flex-col gap-2 mb-7'>
                <label className='font-bold'>{item.label}</label>
                {item.field=='input'?
                <Input name={item.name} required={item?.required}
                onChange={handleInputChange}/>
                :item.field=='textarea'?
                <Textarea name={item.name} required={item?.required}
                onChange={handleInputChange}/>:null}
            </div>
        ))}
        <Button type='submit' className='w-full py-6 bg-blue-600' disabled={loading}>
          {loading&&<LoaderCircleIcon className='animate-spin'/>}Generate Content</Button>
    </form>
   
    </div>
  )
}

export default FormSec