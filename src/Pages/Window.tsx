import {FC, useEffect} from 'react';

const Window:FC = () => {
    useEffect(() => {
        if (!window.opener) {
            window.close();
        }
    },[]);

    const onChangeHandler = (event:any) => {
        const { value } = event.currentTarget;
        window.opener.postMessage(value, "http://localhost:3000");
    };

    return (
        <div>
            <h1>Child Window</h1>
            Name: <input onChange={onChangeHandler} placeholder="Enter your name"></input>
        </div>
    );
 }

export default Window;