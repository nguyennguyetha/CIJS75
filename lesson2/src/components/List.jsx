import React from 'react'
import {Input} from './Input'
import { Footer } from './Footer'
import { ListItem } from './ListItem'


export const List = () => {
  return (
    <div className='content'>
    <Input/>
    <ListItem/>
    <Footer/>
    </div>
  )
}
