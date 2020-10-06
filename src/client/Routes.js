// import React from 'react'
import App from './App'
import Homepage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

export default [
 {
     ...App,
     routes: [
        {   
            ...Homepage,
            path: '/',
            // component : Homepage,
            exact : true
        },
        {   
            ...AdminsListPage,
            path: '/admins',
            // component : Homepage,
        },
        {
            ...UsersListPage,
            // loadData,
            path: '/users',
            // component: UsersListPage
        },{

            ...NotFoundPage
        }
     ]
 }
];



