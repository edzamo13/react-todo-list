import React from 'react';
import {TodoProvider} from '../TodoContext'


/**
 * 
 * A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );

 * 
 */

function App() {

    const [state, setState] = React.useState('State search ')

    return (

        <React.Fragment>
            <TodoHeader>
                <TodoCounter/>
                <TodoSearch/>
            </TodoHeader>
            <TodoList>
                <TodoItem state={state}/>
            </TodoList>

        </React.Fragment>

    );
}
function TodoHeader({children}) {
    return (
        <header> {children} </header>
    )
}

function TodoList({children}) {
    return (
        <section className='TodoList-container'>
            {children} </section>
    )
}
function TodoCounter() { // const [state] = React.useContext(TodoProvider)
    return <p>TodoCounter</p>
}
function TodoSearch() {
    return <p>TodoSearch</p>
}
function TodoItem({state}) {
    return <p>TodoItem: {state}</p>
}


export default App;
