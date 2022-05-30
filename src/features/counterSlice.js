import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};

const productSlice = createSlice({
  name: 'products',
  initialState: [{id: 1, title: 'product1', completed: false}, {id: 2, title: 'product2', completed:false}],

  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newProduct);
    }




  
  }
})

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.




export const {addProduct} = productSlice.actions;

export default productSlice.reducer;

