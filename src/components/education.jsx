import { useState } from 'react'

function CustomInput({ formLabel }) {
    const [value, setValue] = useState('');

    return (
        <input
            type="text"
            id={formLabel}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}

function Education() {

    return (
        <>
            <label
                htmlFor='school'>
                School Name
            </label>
            <CustomInput
                formLabel="school" />
                <br></br>
            <label
                htmlFor='study'>
                Study
            </label>
            <CustomInput
                formLabel="study" />
                <br></br>
            <label
                htmlFor='date'>
                Email
            </label>
            <CustomInput
                formLabel="date" />
                <br></br>
        </>
    )
}

export default Education