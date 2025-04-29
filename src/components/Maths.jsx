import React, { useEffect, useState } from 'react'
function Maths() {
    const [square, setSquare] = useState(2);
    const [cube, setCube] = useState(2);
    const [bgColor, setBgColor]=useState('White');
    const colors = ['green', 'yellow', 'pink', 'blue', 'orange'];


    function kvadratOshirish() {
        setSquare(prev => prev ** 2)
    }
    function kubOshirish() {
        setCube(prev => prev ** 3)
    }
    function bgColorChange(){
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    }
    useEffect(()=>{
        bgColorChange();
    },[cube])

    return (
        <div style={{backgroundColor: bgColor}} >
            <h2>{square}</h2>
            <button onClick={kvadratOshirish}>Square</button>
            <hr />
            <h2>{cube}</h2>
            <button onClick={kubOshirish}>Cube</button>

        </div>
    )
}
export default Maths