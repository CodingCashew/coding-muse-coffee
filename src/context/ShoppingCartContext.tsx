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
  name: string;
  description: string;
  roast: string;
  region: string;
  price: number;
  size: string;
  imagePath: string;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQty: (id: number) => number;
  increment: (
    id: number,
    name: string,
    description: string,
    roast: string,
    region: string,
    price: number,
    size: string,
    imagePath: string
  ) => void;
  decrement: (
    id: number,
    name: string,
    description: string,
    roast: string,
    region: string,
    price: number,
    size: string,
    imagePath: string
  ) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[];
  numOfItems: () => number;
  subtotal: () => number;
  percentToPay: number;
  updatePercentToPay: (newPercent: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [percentToPay, setPercentToPay] = useState<number>(100);

  function updatePercentToPay(newPercentToPay: number): void {
    setPercentToPay(newPercentToPay);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data !== "undefined") {
      setCartItems(JSON.parse(data!));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const data = window.localStorage.getItem("discount");
    if (data !== "undefined") {
      setPercentToPay(JSON.parse(data!));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "discount",
      JSON.stringify(percentToPay || 100)
    );
  }, [percentToPay]);

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increment(
    id: number,
    name: string,
    description: string,
    roast: string,
    region: string,
    price: number,
    size: string,
    imagePath: string
  ) {
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            name,
            description,
            roast,
            region,
            price,
            size,
            imagePath,
            quantity: 1,
          },
        ];
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decrement(
    id: number,
    name: string,
    description: string,
    roast: string,
    region: string,
    price: number,
    size: string,
    imagePath: string
  ) {
    if (!cartItems) return;
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id)?.quantity === 1) {
        return cartItems;
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, name, quantity: item.quantity - 1 };
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

  const subtotal = (): number => {
    let currTotal = 0;
    if (!cartItems || !cartItems.length) return 0;
    for (let item of cartItems) {
      currTotal += item.quantity * item.price;
    }
    return currTotal;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQty,
        removeItem,
        cartItems,
        subtotal,
        numOfItems,
        increment,
        decrement,
        percentToPay,
        updatePercentToPay,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
