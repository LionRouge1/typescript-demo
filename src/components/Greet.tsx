type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) => {
    const { name, messageCount = 0, isLoggedIn } = props
    return (
        <div>
            <h2>
                {
                    isLoggedIn
                    ? `Welcome ${name}! You have ${messageCount} unread messages`
                    : 'Welcome guest'
                }
            </h2>
        </div>
    )
}