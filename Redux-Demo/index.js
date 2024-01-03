const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

const orderCake = () => ({
  type: CAKE_ORDERED,
  payload: 1,
})

const restockCake = (qty = 1) => ({
  type: CAKE_RESTOCKED,
  payload: qty,
})

const orderIcecream = () => ({
  type: ICECREAM_ORDERED,
  payload: 1,
})

const restockIcecream = (qty = 1) => ({
  type: ICECREAM_RESTOCKED,
  payload: qty,
})

// const initialState ={
//   numberOfCakes: 10,
//   numberOfIcecreams: 20,
// }

const initialCakeState ={
  numberOfCakes: 10,
}

const initialIcecreamState ={
  numberOfIcecreams: 20,
}

// (previusState, action) => newState

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      }
    default:
      return state;
  }
}

const IceCreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.payload,
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: IceCreamReducer,
})

const store = createStore(rootReducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators({
  orderCake,
  restockCake,
  orderIcecream,
  restockIcecream,
}, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderIcecream();
actions.restockCake(3);

unsubscribe();