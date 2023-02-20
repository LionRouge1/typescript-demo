import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {};
    const handleLogout = () => {
        setUser({
            name: 'Matchoudi',
            email: 'matchoudi@gmail.com'
        });
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}