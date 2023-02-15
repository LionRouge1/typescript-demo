type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    const {children} = props;
    return <div>{children}</div>
}