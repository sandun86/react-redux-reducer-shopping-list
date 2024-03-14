import { productSlice, ShoppingList, Product } from './productSlice';

describe('Product Reducer', () => {
  const initialState: ShoppingList = {
    products: [],
  };

  it('should handle initial state', () => {
    expect(productSlice.reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addProduct', () => {
    const product: Product = { id: 1, name: 'Product 1', amount: '5' };
    const nextState = productSlice.reducer(initialState, productSlice.actions.addProduct(product));
    expect(nextState.products.length).toBe(1);
    expect(nextState.products[0]).toEqual(product);
  });

  it('should handle deleteProduct', () => {
    const product1: Product = { id: 1, name: 'Product 1', amount: '5' };
    const product2: Product = { id: 2, name: 'Product 2', amount: '7' };
    const state: ShoppingList = { products: [product1, product2] };
    const nextState = productSlice.reducer(state, productSlice.actions.deleteProduct({ id: 1 }));
    expect(nextState.products.length).toBe(1);
    expect(nextState.products[0]).toEqual(product2);
  });

  it('should handle editProduct', () => {
    const product1: Product = { id: 1, name: 'Product 1', amount: '5' };
    const product2: Product = { id: 2, name: 'Product 2', amount: '7' };
    const state: ShoppingList = { products: [product1, product2] };
    const editedProduct: Product = { id: 1, name: 'Edited Product 1', amount: '12' };
    const nextState = productSlice.reducer(state, productSlice.actions.editProduct({ editedProduct }));
    expect(nextState.products.length).toBe(2);
    expect(nextState.products[0]).toEqual(editedProduct);
    expect(nextState.products[1]).toEqual(product2);
  });

  it('should handle addProducts', () => {
    const products: Product[] = [
      { id: 1, name: 'Product 1', amount: '5' },
      { id: 2, name: 'Product 2', amount: '7' }
    ];
    const nextState = productSlice.reducer(initialState, productSlice.actions.addProducts(products));
    expect(nextState.products.length).toBe(2);
    expect(nextState.products).toEqual(products);
  });
});
