function getSubNav(pathHead){
    const navList = [
            {path:`/${pathHead}/list`,key:`/${pathHead}/list`,title:`${pathHead} List`},
            {path:`/${pathHead}/add`,key:`/${pathHead}/add`,title:`Add ${pathHead}`},
            {path:`/${pathHead}/upload`,key:`/${pathHead}/upload`,title:`Upload Spreadsheet`},
        ]
    
    return navList
} 



const sideNavList = [
    { title: 'Dashboard', key: '/dashboard', path: '/dashboard' },
    { title: 'Students', key: '/students', path: '/students',children: getSubNav('students')},
    { title: 'Schools', key: '/schools', path: '/schools', children: getSubNav('schools') },
    { title: 'Volunteers', key: '/volunteers', path: '/volunteers', children: getSubNav('volunteers') },
    { title: 'Events', key: '/events', path: '/events', children: getSubNav('events') },
    { title: 'Users', key: '/users', path: '/users', children: getSubNav('users') },
    { title: 'Download', key: '/download', path: '/download' },

]
export default sideNavList

export const topNavList=[
    ...sideNavList,
    ...getSubNav('students'),
    ...getSubNav('schools'),
    ...getSubNav('volunteers'),
    ...getSubNav('events'),
    ...getSubNav('users'),
    {path:`/events/update`,key:`/events/update`,title:`Update`},
]

export const rootSubmenuKeys = ['/students', '/schools', '/volunteers','/events','/users'];