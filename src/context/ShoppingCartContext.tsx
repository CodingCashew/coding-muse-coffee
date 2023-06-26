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

export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  length: string;
  imagePath: string;
}

type ShoppingCartContext = {
  addItem: (courseInfo: CartItem) => void;
  removeItem: (id: number) => void;
  resetCart: () => void;
  cartItems: CartItem[];
  numOfItems: () => number;
  subtotal: () => number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data !== "undefined") {
      // console.log("data: ", data);
      setCartItems(JSON.parse(data!));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addItem(newItem: CartItem) {
    setCartItems((currItems: any) => {
      if (currItems.find((currItem: any) => currItem.id === newItem.id) == null) {
        return [...currItems, newItem];
      } else return currItems;
    });
  }

  function removeItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function resetCart() {
    setCartItems(() => {
      return [];
    });
  }

  const numOfItems = () => {
    return cartItems.length
  };

  const subtotal = (): number => {
    let currTotal = 0;
    if (!cartItems.length) return 0;
    for (let item of cartItems) {
      currTotal += item.price;
    }
    return currTotal;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        removeItem,
        cartItems,
        subtotal,
        numOfItems,
        addItem,
        resetCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
