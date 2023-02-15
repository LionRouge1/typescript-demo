type PersonProps = {
    name: {
        first: string
        last: string
    }
}

export const Person = (props:PersonProps) => {
    const {name} = props
    return <div>{name.first} {name.last}</div>
}