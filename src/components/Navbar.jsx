import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddTodo from './AddTodo';
import  TodoList from './TodoList';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

const Navbar = () => {
  return (
    <div className='container mx-auto px-5 flex justify-between items-center pt-5'>
        <div>
            <p className='text-orange-500 font-medium text-[20px] md:text-[24px]'>Franck Todo</p>
        </div>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />}>
                    <Route index element = {<TodoList />} />
                    <Route path='add-todo' element = {<AddTodo />} />
                    <Route path='login' element = {<Login />} />
                    <Route path='signup' element = {<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default Navbar;