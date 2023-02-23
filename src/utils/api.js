import items from './items.json';

const API_DELAY = 1000;

export async function getItems() {
  await delay(API_DELAY);
  return items;
}

export async function createItem(item) {
  await delay(API_DELAY);
  const newId = Math.max(...items.map((i) => i.id)) + 1;
  const newItem = { id: newId, ...item };
  items.push(newItem);
  return newItem;
}

export async function updateItem(id, updates) {
  await delay(API_DELAY);
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const updatedItem = { ...items[index], ...updates };
  items[index] = updatedItem;
  return updatedItem;
}

export async function deleteItem(id) {
  await delay(API_DELAY);
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const deletedItem = items.splice(index, 1)[0];
  return deletedItem;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
