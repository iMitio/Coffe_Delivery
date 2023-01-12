import {createContext, ReactNode, useEffect, useState} from "react"
import {Coffee} from  "../pages/Home/components/CoffeCard"

import {produce} from  "immer"


export interface CartItem  extends Coffee{
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemTotal: number
    addCoffeeToCart: (coffee: CartItem) => void;
    ChangeCartItemQuantity: (CartItemId: number, type: "increase" | "decrease") => void;
    removerCartItem: (CartItemId: number, ) => void;
}

interface CartContextProviderProps {
    children: ReactNode,
}

const CoffeItemStorageKey  = "@coffeDelivery:cartItem"
export const CartContext = createContext({} as CartContextType)


export function CartContextProvider ({children}: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storagedCartItems = localStorage.getItem(CoffeItemStorageKey)

        if(storagedCartItems) {
            return JSON.parse(storagedCartItems)
        }

        return [];
    });
    
    const cartQuantity = cartItems.length;
    const cartItemTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addCoffeeToCart(coffee: CartItem) {
    const coffeAlreadyExistsInCart = cartItems.findIndex(
        cartItem => cartItem.id === coffee.id
    )
        
        const newCart = produce(cartItems,  (draft) => {
            if(coffeAlreadyExistsInCart< 0) {
                draft.push(coffee)
            }else {
                draft[coffeAlreadyExistsInCart].quantity += coffee.quantity
            }
        })

        setCartItems(newCart)
    }

    function ChangeCartItemQuantity(cartItemId: number, type: "increase" | "decrease") {
        const newCart = produce(cartItems,  (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem =>  cartItem.id === cartItemId)
            
            if(coffeeExistsInCart >= 0) {
                const  item = draft[coffeeExistsInCart];
                draft[coffeeExistsInCart].quantity = type === 'increase' ?  item.quantity + 1 : item.quantity - 1;
            }
        })

        setCartItems(newCart)

    }

    

    function removerCartItem(cartItemId: number) {
        const newCart = produce(cartItems, draft => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem =>  cartItem.id === cartItemId)

            if(coffeeExistsInCart>= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }

        })
        setCartItems(newCart)

    }

    useEffect(() => {
        localStorage.setItem(CoffeItemStorageKey, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{
            cartItems, 
            addCoffeeToCart, 
            cartQuantity, 
            ChangeCartItemQuantity, 
            removerCartItem,
            cartItemTotal
        }}>
            {children}
        </CartContext.Provider>
    )
} 