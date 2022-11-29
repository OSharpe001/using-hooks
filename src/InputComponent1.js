import { useState } from 'react';

export default function InputComponent1() {
    const [inputText, setText] = useState('hello');

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <>
        <input value={inputText} onChange={handleChange} />
        <p>You typed: {inputText}</p>
        <button onClick={() => setText('hello')}>Reset</button>
        </>
    );
};