import { useState } from 'react'

function CustomInput({ formLabel, value, setValue }) {

    return (
        <input
            type="text"
            id={formLabel}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}

function General({isEditing}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');




    return (
        <>
           <label
                htmlFor='firstName'>
                First Name:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="firstName"
                        value={firstName}
                        setValue={setFirstName} /> :
                    <b>{firstName}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='lastName'>
                Last Name:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="lastName"
                        value={lastName}
                        setValue={setLastName} /> :
                    <b>{lastName}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='Email'>
                Email:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="email"
                        value={email}
                        setValue={setEmail} /> :
                    <b>{email}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='phone'>
                Phone:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="phone"
                        value={phone}
                        setValue={setPhone} /> :
                    <b>{phone}</b>
                }
            </label>
            <br></br>
        </>
    )
}

export default General
