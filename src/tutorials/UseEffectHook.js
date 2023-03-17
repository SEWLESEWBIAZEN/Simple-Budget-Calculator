import { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectHook = () =>
{
    const [data, setData] = useState([]);
    useEffect(() =>
    {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) =>
            {
                setData(response.data);
                console.log(response.data);
            });
    });

    return (
        <div>

            <h1>
                {data[99].name}

            </h1>

        </div>
        // data.forEach((x) =>
        // {
        //     return (
        //         <div>
        //             <h1>
        //                 {x.name}

        //             </h1>
        //         </div>);
        // }
        // )
    );

}
export default UseEffectHook;