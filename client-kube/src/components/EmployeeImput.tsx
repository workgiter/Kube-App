import React, { useState } from "react"

interface IProps {
    addEmployee: (name: string, email: string, age: number) => void
}

const EmployeeImput = (props: IProps) => {

    let [nameState, setNameState] = useState("")
    let [emailState, setEmailState] = useState("")
    let [ageState, setAgeState] = useState("")

    return (
        <div>
            <p className="inline">Name</p>
            <input value={nameState} onChange={(e) => { setNameState(e.target.value) }}></input>
            <p className="inline">Email</p>
            <input value={emailState} onChange={(e) => { setEmailState(e.target.value) }}></input>
            <p className="inline">Age</p>
            <input value={ageState} onChange={(e) => {
                if (!isNaN(+e.target.value)) {
                    setAgeState(e.target.value)
                }
            }}></input>
            <button onClick={() => props.addEmployee(nameState, emailState, Number(ageState))}>Add new Employee</button>
        </div>
    )

}

export default EmployeeImput