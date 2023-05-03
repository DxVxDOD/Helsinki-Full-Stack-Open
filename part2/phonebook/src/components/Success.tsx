// eslint-disable-next-line react/react-in-jsx-scope
const Success = ({message}: {message: string}) => message === '' ? null : <h2 className='success' >{message}</h2>;

export default Success;
