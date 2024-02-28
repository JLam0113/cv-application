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

function Education({ isEditing }) {
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [date, setDate] = useState('');

    return (
        <>
            <label
                htmlFor='school'>
                School Name:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="school"
                        value={school}
                        setValue={setSchool} /> :
                    <b>{school}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='study'>
                Study:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="study"
                        value={study}
                        setValue={setStudy} /> :
                    <b>{study}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='date'>
                Date:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="date"
                        value={date}
                        setValue={setDate} /> :
                    <b>{date}</b>
                }
            </label>
            <br></br>
        </>
    )
}

export default Education