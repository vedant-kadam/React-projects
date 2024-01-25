import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items:[],
    handleAddItemToCart:()=>{},
    handleUpdateCartItemQuantity:()=>{}
});


function shoopingCartReducer(state,action){
   let  prevShoppingCart = [...state.items];
    if(action.type === "ADD_ITEM"){
        const updatedItems = prevShoppingCart;
    
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
          updatedItems.push({
            id: action.payload.id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
          ...state,
          items: updatedItems,
        };
        
    }else if(action.type==="UPDATE_ITEM"){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.id
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
            ...state,
          items: updatedItems,
        };
    }

    return state;
}


export function CartContextProvider({children}){
   
    const [shoppingCartState,shoopingCartDispatch] = useReducer(shoopingCartReducer,{
        items: [],
      });

    
      function handleAddItemToCart(id) {
        
        shoopingCartDispatch({
            type:"ADD_ITEM",
            payload:{
                id:id,

            }
        })
        
      
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
       
        shoopingCartDispatch({
            type:"UPDATE_ITEM",
            payload:{
                id:productId,
                amount:amount,

            }
        })
       
        
      }
      const ctxnVal = {
        items: shoppingCartState.items,
        handleAddItemToCart: handleAddItemToCart,
        handleUpdateCartItemQuantity:handleUpdateCartItemQuantity,
      };

      return <CartContext.Provider value={ctxnVal}>
        {children}
      </CartContext.Provider>
}

 


