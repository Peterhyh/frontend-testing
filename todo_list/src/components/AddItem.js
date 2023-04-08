import { useState } from 'react';

const AddItem = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (data) => {
        setInputValue(data.target.value);
    };

    const handleSubmit = (data) => {
        data.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: inputValue });
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
            />
            <button type='submit'>+</button>
        </form>
    )
};

export default AddItem;