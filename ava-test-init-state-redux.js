//ava test on redux initial state

test('Reducers of cart should provide initial state', t => {
  t.deepEqual(cart(undefined, {}), initialState)
})

//reducers
const initialState = {
  products: []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState
    case 'CHECKOUT_FAILURE':
      return action.cart
    default:
      return state
  }
}
