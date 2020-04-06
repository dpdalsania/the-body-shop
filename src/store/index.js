import React from 'react';
import { createStore, combineReducers } from "redux";
import reducer from "../reducer/shopping.reducer"


const store = createStore(
    combineReducers({
        state: reducer
    })
);

export default store;