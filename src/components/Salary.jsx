import React, { useState, useEffect } from 'react'

function Salary() {
    const [oylik, setOylik] = useState(400);
    const [inputValue, setInputValue] = useState('');
    const [action, setAction] = useState(''); 
    const [message, setMessage] = useState('');

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function addSalary() {
        setOylik(prev => prev + Number(inputValue));
        setAction('add'); 
    }

    function subtractSalary() {
        setOylik(prev => prev - Number(inputValue));
        setAction('subtract'); 
    }

    useEffect(() => {
        if (action === 'add') {
            setMessage('Ee Raxmat');
        } else if (action === 'subtr    act') {
            setMessage('Insof bomi aka');
        }
    }, [oylik]);

    return (
        <div style={{ padding: '20px' }}>
            <h3>Oylik: {oylik} so'm</h3>
            <input
                type="number"
                placeholder='Pul kiriting'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={addSalary}>+</button>
            <button onClick={subtractSalary}>-</button>
            <h2>{message}</h2>
        </div>
    )
}

export default Salary
