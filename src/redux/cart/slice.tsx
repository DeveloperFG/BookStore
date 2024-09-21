import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: null,
    users: [],
    loading: false
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        createCart: (state, action) => {               
            return{
                ...state,
                cart:{
                    id: action.payload.id,
                    nome: action.payload.nome,
                    preco: action.payload.preco
                }
            }
        },

        fetchUsers: (state) => {
            state.loading = true
        },
        
        fetchUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false
      
          },
          fetchUsersFailure: (state, action) => {
            state.loading = false;
          }

    }
})

export const { createCart, fetchUsers,fetchUsersSuccess, fetchUsersFailure  } = cartSlice.actions;

export default cartSlice.reducer;