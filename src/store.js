// types
const CHANGE_COLOR = 'CHANGE_COLOR';
// actions
const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: {
        // tell it what to change
        value: color
    }
});
// initial state 
const initialState = {
    color: '#ffffff'
}
// reducer
const reducer = (state=initialState, action) => {
    return state;
}
// create store
const store = createStore(reducer) //dev tools needs more args
// export store
export default store;