export const addItemToCart = (currentItem, newItem) => {
  const existingCarItems = currentItem.find(
    cartItem => cartItem.id === newItem.id
  );

  if (existingCarItems) {
    return currentItem.map( item => 
      item.id === newItem.id ? 
      {...item, quantity: item.quantity + 1} : 
      item
    );
  }

  return [...currentItem, {...newItem, quantity: 1}];
}

export const removeItemFromCart = (currentItem, removeItem) => {
  const existingCarItems = currentItem.find(
    cartItem => cartItem.id === removeItem.id
  );
  if (existingCarItems.quantity === 1) {
    return currentItem.filter( item => item.id !== removeItem.id);
  }
  return currentItem.map( item => 
    item.id === removeItem.id ? 
    {...item, quantity: item.quantity = 1} : 
    item
  );
}