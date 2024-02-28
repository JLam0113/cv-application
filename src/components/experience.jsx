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

function CustomTextArea({ formLabel, value, setValue }) {

    return (
        <textarea
            type="text"
            id={formLabel}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}

function Experience({isEditing}) {
    const [company, setCompany] = useState('');
    const [job, setJob] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    return (
        <>
            <label
                htmlFor='company'>
                Company:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="company"
                        value={company}
                        setValue={setCompany} /> :
                    <b>{company}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='job'>
                Job Title:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="job"
                        value={job}
                        setValue={setJob} /> :
                    <b>{job}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='description'>
                Job Description:&nbsp;
                {isEditing ?
                    <CustomTextArea
                        formLabel="description"
                        value={description}
                        setValue={setDescription} /> :
                    <b>{description}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='startDate'>
                Start Date:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="startDate"
                        value={startDate}
                        setValue={setStartDate} /> :
                    <b>{startDate}</b>
                }
            </label>
            <br></br>
            <label
                htmlFor='endDate'>
                End Date:&nbsp;
                {isEditing ?
                    <CustomInput
                        formLabel="endDate"
                        value={endDate}
                        setValue={setEndDate} /> :
                    <b>{endDate}</b>
                }
            </label>
            <br></br>
        </>
    )
}

export default Experience