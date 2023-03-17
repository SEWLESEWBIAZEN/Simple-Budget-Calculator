
import { useReducer } from 'react';

const reducer = (state, action) =>
{
    switch (action.type)
    {
        case "INCREMENT":
            return { count: state.count + 1, showText: !state.showText };
        case "DECREMENT":
            return { count: state.count - 1, showText: !state.showText };
        // case "toggleShowText":
        //     return { count: state.count, showText: !state.showText };
        default:
            return state;
    }

}
const UseReducer = () =>
{
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });


    return (<div>
        <h4>{state.count}</h4>
        <button onClick={() =>
        {
            dispatch({ type: "INCREMENT" });

            // dispatch({ type: "toggleShowText" });
        }

        }>Click Me!</button>
        <button onClick={() =>
        {
            dispatch({ type: "DECREMENT" });
        }}>DECREMENT</button>
        {state.showText && <h3>This is the Text To Be Showed! </h3>}

    </div>);
}
export default UseReducer;