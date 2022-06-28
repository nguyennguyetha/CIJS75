import React from 'react'
import {} from './components/List';

export const App = () => {
    return <List />
}
export default class List extends React.Component {
    render() {
      return(
          <List />
        );
    }
  }
