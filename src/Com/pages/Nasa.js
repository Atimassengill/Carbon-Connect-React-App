import '../../App.css';
import React, {useEffect} from 'react'




export default function Nasa() {
    useEffect(() => {
        window.location.href = "https://climate.nasa.gov/climate_resources/205/twin-blue-marbles/";
      }, []);
    return (
        <div>
            
        </div>
    )
}
