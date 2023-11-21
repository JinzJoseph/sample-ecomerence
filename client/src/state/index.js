import { createSlice }  from '@reduxjs/toolkit'

const initialState ={
    isCartOpen:false,
    cart:[],
    items:[],

};
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setItems:(state,action)=>{
            state.items=action.payload;

        },
        addToCart: (state, action) => {
            const { id, count } = action.payload;
          
            // Check if the item is already in the cart
            const existingItem = state.cart.find(item => item.id === id);
          
            if (existingItem) {
              // If the item is already in the cart, update the count
              existingItem.count += count || 1;
            } else {
              // If the item is not in the cart, add it with an initial count of 1
              state.cart.push({ ...action.payload.item, count: count || 1 });
            }
          },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!=action.payload.id);

        },
        increaseCount:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                if(item.id==action.payload.id){
                    item.count++;
                }
                return item;
            });
        },
        decreaseCount:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                if(item.id==action.payload.id && item.count>1){
                    item.count--;
                }
                return item;
            });
        },
        setIsCartOpen:(state)=>{
            state.isCartOpen=!state.isCartOpen;
        },


    },
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;