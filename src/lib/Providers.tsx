"use client" 

import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { AntdRegistry } from '@ant-design/nextjs-registry';

const Providers = ({children}:{children:React.ReactNode}) => {
    return <Provider store={store}>
        <AntdRegistry>{children}</AntdRegistry>
        </Provider>
};

export default Providers;