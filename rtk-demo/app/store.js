const configureStore = require('@reduxjs/toolkit').configureStore;
const 

const store = configureStore({
  reducer: {
    cake: require('./features/cake/cakeSlice').cakeSlice.reducer,
    icecream: require('./features/icecream/icecreamSlice').icecreamSlice.reducer,
  }
})