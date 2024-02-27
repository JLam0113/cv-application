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

function General() {

    return (
        <>
            <label
                htmlFor='firstName'>
                First Name
            </label>
            <CustomInput
                formLabel="firstName" />
                <br></br>
            <label
                htmlFor='lastName'>
                Last Name
            </label>
            <CustomInput
                formLabel="lastName" />
                <br></br>
            <label
                htmlFor='email'>
                Email
            </label>
            <CustomInput
                formLabel="email" />
                <br></br>
            <label htmlFor='phone'>
                Phone
            </label >
            <CustomInput
                formLabel="phone" />
        </>
    )
}

export default General
