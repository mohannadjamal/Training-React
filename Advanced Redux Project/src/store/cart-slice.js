import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, itemsCounter: 0, items: [] };

const getIndex = (title, items) => {
	for (let i = 0; i < items.length; i++) {
		if (items[i].title === title) {
			return i;
		}
	}
	return -1;
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
		addToCart(state, action) {
			const index = getIndex(action.payload.title, state.items);
			if (index >= 0) {
				state.items[index] = { amount: state.items[index].amount++, ...state.items[index] };
			} else {
				state.items.push({ amount: 1, ...action.payload });
			}
			state.itemsCounter++;
		},
		increment(state, action) {
			const index = getIndex(action.payload, state.items);
			state.items[index] = { amount: state.items[index].amount++, ...state.items[index] };
			state.itemsCounter++;
		},
		decrement(state, action) {
			const index = getIndex(action.payload, state.items);
			if (state.items[index].amount === 1) {
				state.items.splice(index, 1);
			} else {
				state.items[index] = { amount: state.items[index].amount--, ...state.items[index] };
			}
			state.itemsCounter--;
		}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;