import React from 'react';

const Register = () => {
    const [register, setRegister] = useForm();
    const handleRegistration = (data) =>
    console.log(data) 

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [email, setEmail] = useState(null)

    const handleSubmit = (event) => {
        console.log(firstName, lastName, password, confirmPassword, email)
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
            <label htmlFor='first name'>First Name</label>
            <input value={firstName} firstName='first name' {...register('first name', { required: true })} placeholder="first name" onChange={(event) => setFirstName(event.target.value)}/>
            <label htmlFor='last name'>Last Name</label>
            <input value={lastName}{...register('last name', { required: true })} placeholder="last name" onChange={(event) => setLastName(event.target.value)}/>
            <label htmlFor='email'>Email</label>
            <input value={password}{...register('email', { required: true })} placeholder="email"onChange={(event) => setEmail(event.target.value)}/>
            <label htmlFor='password'>Password</label>
            <input value={confirmPassword}{...register('password', { required: true })} placeholder="*********" onChange={(event) => setPassword(event.target.value)}/>
            <label htmlFor='confirm password'>Confirm Password</label>
            <input value={email} {...register('confirm password', { required: true })} placeholder="confirm password" onChange={(event) => setConfirmPassword(event.target.value)}/>
            <button>Submit</button>
            </form>

        </div>
    )

}

export default Register;