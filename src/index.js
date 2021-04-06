import './styles.css';
import { createStore } from 'redux';;;
import { rootReducer } from './redux/rootReducer';
import { INCREMENT, DECREMENT } from './redux/type';
import { increment, decrement}  from './redux/actions'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');


const store = createStore(rootReducer, 0 );


addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

store.subscribe( () => {
    const state = store.getState();
    counter.textContent = state;
})
store.dispatch({type: 'INIT_APPLICATION'})

