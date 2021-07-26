    import {lazy} from 'react'

    const Dashboard = lazy(()=>import("../pages/contents/Dashboard"))
    const Students = lazy(()=>import('../pages/contents/Students'))
    const Schools = lazy(()=>import('../pages/contents/Schools'))
    const Volunteers = lazy(()=>import('../pages/contents/Volunteers'))
    const Events = lazy(()=>import('../pages/contents/Events'))
    const Users = lazy(()=>import('../pages/contents/Users'))
    const Download = lazy(()=>import('../pages/contents/Download'))

    const contentPageList =[
        {path:'/dashboard',component:Dashboard, key:'component/dashboard'},
        {path:'/students',component:Students, key:'component/students'},
        {path:'/schools',component:Schools, key:'component/schools'},
        {path:'/volunteers',component:Volunteers, key:'component/volunteers'},
        {path:'/events',component:Events, key:'component/events'},
        {path:'/users',component:Users, key:'component/users'},
        {path:'/download',component:Download, key:'component/download'},
    ]

    export default contentPageList

