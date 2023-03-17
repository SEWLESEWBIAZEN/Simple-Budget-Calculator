import { useRef } from "react";

const UseRefHook = () =>
{
    const inputRef = useRef(null);
    const onClick = () =>
    {
        inputRef.current.focus();


    };
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={onClick}>Change Text</button>

        </div>);

}
export default UseRefHook;