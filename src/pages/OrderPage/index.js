import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer, { addOrderItem, deleteAllOrderItems } from '../../reducers/OrderReducer';
import "./OrderPage.css";

const orderStore = createStore(reducer);

function OrderForm() {
    const [state, setState] = useState({ text: "" });
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        setState({ text: event.target.value });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch(addOrderItem(state));
    }

    const handleOnDeleteAll = (event) => {
        event.preventDefault();
        dispatch(deleteAllOrderItems());
    }

    return (
        <div className="order-page">
            <form onSubmit={handleOnSubmit}>
                <input value={state.text} onChange={handleOnChange} />
                <button>Add order</button>
            </form>
            <form onSubmit={handleOnDeleteAll}>
                <button>Delete orders</button>
            </form>
            <p>Orders:</p>
        </div>
    );
}

function OrderList() {
    const state = useSelector((state) => state);

    return (
        <div>
            {state.map((item, index) =>
                <div key={index}>{item.text}</div>
            )}
        </div>
    )
}

export default function OrderPage() {
    return (
        <Provider store={orderStore}>
            <div className="OrderPage">
                <h1>Order food</h1>
                <OrderForm />
                <OrderList />
            </div>
        </Provider>
    )
}