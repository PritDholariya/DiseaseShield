import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Header from './Header';

export default function Layout(){
    return(
        <div className='h-full w-full flex'>
        <Header/>
        <Outlet/>
    </div>
    );

    
}