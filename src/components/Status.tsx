type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = ({ status }: StatusProps) => {
    let message;
    switch (status) {
        case 'loading':
            message = 'Loading...';
            break;
        case 'success':
            message = 'Data fetched successfully!';
            break;
        case 'error':
            message = 'Error fetching data';
            break;
        default:
            message = 'Unknown error';
    }

    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}