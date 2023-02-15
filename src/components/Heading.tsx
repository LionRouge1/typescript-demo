type headingProps = {
    children: string
}

export const Heading = (props:headingProps) => {
    const {children} = props
    return <div>{children}</div>
}