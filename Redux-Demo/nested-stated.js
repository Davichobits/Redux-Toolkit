const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  name: 'David',
  address: {
    street: 'Nogales',
    city: 'Loja',
    country: 'Ecuador',
  },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => ({
  type: STREET_UPDATED,
  payload: street,
})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        }
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(updateStreet('Calle 18 de Noviembre'));
unsubscribe();