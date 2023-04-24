import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Window from "./Pages/Window";

const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/popup" element={<Window/>}/>
        </Routes>
    );
}

export default Router;