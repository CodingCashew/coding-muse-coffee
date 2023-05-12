import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQty: (id: number) => number;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[];
  numOfItems: () => number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

let cartFromLocalStorage: CartItem[];

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  useEffect(() => {
    
    cartFromLocalStorage = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    console.log(cartFromLocalStorage);
  }, []);
  const [cartItems, setCartItems] = useState<CartItem[]>(
    cartFromLocalStorage || []
  );
  console.log(cartItems)
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify([cartItems]));
  }, [cartItems]);

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increment(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            // return { ...item };
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decrement(id: number) {
    if (!cartItems) return;
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const numOfItems = () => {
    let sum = 0;
    if (cartItems) {
      for (let item of cartItems) {
        sum += item.quantity;
      }
    }
    return sum;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQty,
        increment,
        decrement,
        removeItem,
        cartItems,
        numOfItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
