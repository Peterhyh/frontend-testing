import React from 'react';
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';


// Creating initial state:
const initialState = {
  items: [
    { id: uuid(), name: 'milk' },
    { id: uuid(), name: 'eggs' },
    { id: uuid(), name: 'water' }
  ]
};

const listReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat([{ id: uuid(), name: action.payload }])
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) =>
          item.id !== action.payload.id
        )
      }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const { items } = state;

  return (
    <Container className='app-container'>
      <Row>
        <Col className='input-container'>
          <AddItem dispatch={dispatch} />
        </Col>
      </Row>
      <Row>
        <Col className='list-container'>
          {items.map((item) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            )
          })}
        </Col>
      </Row>
    </Container>
  )
};

export default App;




