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

function CustomTextArea({ formLabel }) {
    const [value, setValue] = useState('');

    return (
        <textarea
            type="text"
            id={formLabel}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}

function Experience() {

    return (
        <>
            <label
                htmlFor='company'>
                Company Name
            </label>
            <CustomInput
                formLabel="company" />
            <br></br>
            <label
                htmlFor='job'>
                Job Title
            </label>
            <CustomInput
                formLabel="job" />
            <br></br>
            <label
                htmlFor='description'>
                Job Description
            </label>
            <CustomTextArea
                formLabel="description" />
            <br></br>
            <label
                htmlFor='startDate'>
                Start Date
            </label>
            <CustomInput
                formLabel="startDate" />
            <br></br>
            <label
                htmlFor='endDate'>
                End Date
            </label>
            <CustomInput
                formLabel="endDate" />
            <br></br>
        </>
    )
}

export default Experience