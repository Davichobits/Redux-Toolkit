const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

const orderCake = () => ({
  type: CAKE_ORDERED,
  quantity: 1,
})

const initialState ={
  numberOfCakes: 10,
}

// (previusState, action) => newState

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.quantity,
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();