import React,{useState} from 'react';

const roleList = [
    {value:"ROLE_SD",label:"학생"},
    {value:"ROLE_TC",label:"교직원"},
    {value:"ROLE_MT",label:"멘토"},
]
const SignUpInfo = ({handleSignUp}) => {
    const [role, setRole]= useState(roleList[0].value);

    const handleChangeRole = (e) => {
        setRole(e.target.value);
    }

    return (
        <>
            <select value={role} onChange={handleChangeRole}>
                {roleList.map((item) =>{
                    return <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>
            <button onClick={() => {handleSignUp(role);}}>가입</button>
        </>
    );
};

export default SignUpInfo;
