import React from "react";
import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  // Estado inicial de los Items
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItems(parsedItems);
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1500)
  })

  // Guardando Items
  const saveItems = (newItems) => {
    try {
      const ItemsStringified = JSON.stringify(newItems);
      localStorage.setItem(itemName, ItemsStringified);
      setItems(newItems)
    } catch (error) {
      setError(error)
    }
  }

  return {
    items,
    saveItems,
    loading,
    error,
  };
}

export { useLocalStorage }