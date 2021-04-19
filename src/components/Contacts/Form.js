import React, { useState } from 'react'
import { Button } from '../Navbar/Button'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [text, setText] = useState('');
    const [answ, setAnsw] = useState({
        name: 'Sto',
        email: 'sto@abv.bg',
        topic: 'Падрон',
        text: 'Изпратете вашите запитване'
    })

    const handleSubmit = (e) => {
        e.preventDefaul();
        console.log(answ)
    }

    const handleChange = (e) => {
        const name = e.target;
        const value = e.target;
        setAnsw({ [name]: value })

    }
    return <section>
        <form>
            <div>
                <label htmlFor="name">
                    Вашето име
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={answ.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">
                    Вашата поща
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={answ.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="topic">
                    Вашето име
                </label>
                <input
                    type="text"
                    name="topic"
                    id="topic"
                    value={answ.topic}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="text">
                    Вашето съобщение
                </label>
                <textarea
                    type="text"
                    name="text"
                    id="text"
                    value={answ.text}
                    onChange={handleChange}
                />
            </div>
            <button type='submit'
                onClick={handleSubmit}
            >
                Изпрати
            </button>
        </form>
    </section>
}

export default Form
