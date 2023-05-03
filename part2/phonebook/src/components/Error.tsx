const Error = ({error}: {error: string}) => error === '' ? null : <h2 className='error' >{error}</h2>;
export default Error;
