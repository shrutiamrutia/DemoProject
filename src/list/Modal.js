import { useEffect, useState } from 'react';
import './Modal.css'

const Modal = (props) => {
    // console.log("pro", props)
    const { handleAdd, user, isEdit } = props

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeAge = (event) => {
        setAge(event.target.value);
    };

    const transferValue = () => {
        if (isEdit) {
            handleAdd({ name: name, age: age, index: user.index })
        } else {
            handleAdd({ name: name, age: age })
        }

    };

    useEffect(() => {
        if (isEdit) {
            setName(user.name);
            setAge(user.age);
        }
    }, [user])

    return (
        <div className='app-container'>
            {/* <form > */}
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={changeName} />
                <label>Age</label>
                <input type="text" value={age} onChange={changeAge} />
                <button className='button' onClick={transferValue} > Submit</button>
            </div>
            {/* </form> */}
        </div>
    );
}

export default Modal;