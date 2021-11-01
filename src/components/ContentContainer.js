import React from "react";
import HorrorMovies from "./HorrorMovies";
import Logoff from "./Logoff";
import { Link } from 'react-router-dom'


const ContentContainer = () => {
    return (
        <div>
            <HorrorMovies/>
            <Logoff/>
        </div>
    )
} 

export default ContentContainer;