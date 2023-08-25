import { Link,Outlet } from "react-router-dom";

export const Placement=()=>{
    return (
        <>
        <div className='search'>
            <input type="search" placeholder="search" />
        </div>
        <div className="feat">
            <Link to='featured' >Featured</Link>
            <Link to='new' >new</Link>
        </div>
        <Outlet/>
        </>
    )
}