import React from 'react';

const Error = ({error}: {error: string}) => error === '' ? null : <h2 className='error' >{error}</h2>;
export default Error;
