import React from 'react'
import { Item } from './Item'

export const ListItem = () => {
  const array = ['Clean up bedroom', 'Buy some milk', 'Jogging','Learn React', 'Doing Exercises'];
  return (
    <div>
        {array.map ((el) => {
            console.log (el);
            return Item(el);
        }
        )}
    </div>
  );
};
