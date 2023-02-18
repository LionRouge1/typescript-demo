type PersonListPropos = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = ({ names }: PersonListPropos) => {
    return (
        <div>
            {
                names.map((name) => <h2 key={names.indexOf(name)}>{name.first} {name.last}</h2>)
            }
        </div>
    )
}