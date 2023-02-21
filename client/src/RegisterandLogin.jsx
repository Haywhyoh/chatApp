import {useState} from "react";

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login')

    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
                <input value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    placeholder="username"
                    className="block w-full rounded-sm p-2 mb-2 border"
                    type="text" />
                <input value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    placeholder="password"
                    className="block w-full rounded-sm p-2 mb-2 border"
                    type="password" />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
            </form>
        </div>
    )
}