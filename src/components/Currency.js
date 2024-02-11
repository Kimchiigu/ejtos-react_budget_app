import React, { useState } from 'react';

function Currency() {
    const [currency, setCurrency] = useState('');

    const updateCurrency = (event) => {
        setCurrency(event.target.value)
    }

    return (
        <div className="dropdown">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Currency ({currency})</label>
            <select className="form-select" id="inputGroupSelect01" onChange={updateCurrency}>
                <option value="$ Dollar"> $ Dollar</option>
                <option value="£ Pound"> £ Pound</option>
                <option value="€ Euro"> € Euro</option>
                <option value="₹ Ruppee"> ₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;
