import { createContext } from 'react';

const CurrentUserContext = createContext({ id: '', type: '' });

export default CurrentUserContext;