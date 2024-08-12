import React, { useState } from 'react';
import {IoMenuSharp , IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
     const [open, setOpen] =useState(false)
    return (
        <div  className='flex mt-3'>
            <div className='mx-6 mt-2' onClick={()=>{setOpen(!open)}}>
                {
                    open === true ? <IoMenuSharp></IoMenuSharp> :  <IoCloseSharp />
                }
            </div>
            <div className={`${open? 'hidden' : '-top-10'} md: absolute bg-red-200 md:static`}>
                <ul className="text-xl mr-6"><a href=''>Home</a></ul>
                <ul className="text-xl mr-6"><a href=''>About</a></ul>
                <ul className="text-xl mr-5"><a href=''>Contact</a></ul>
                <ul className="text-xl mr-6"><a href=''>Follow</a></ul>
                <ul className="text-xl mr-6"><a href=''>Bookmark</a></ul>
            </div>
            </div>
    );
};

export default NavBar;