import productReducer from './productSlice';
import { store, RootState, AppDispatch } from './store';

describe('Redux Store Configuration', () => {
  it('should have correct reducer', () => {
    expect(store.getState()).toEqual({
      products: productReducer(undefined, { type: 'test' }),
    });
  });

  it('should have correct RootState and AppDispatch types', () => {
    const rootState: RootState = store.getState();
    expect(rootState).toEqual({
      products: productReducer(undefined, { type: 'test' }),
    });

    const appDispatch: AppDispatch = store.dispatch;
    expect(typeof appDispatch).toEqual('function');
  });
});