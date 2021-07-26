
function getSubNav(pathHead){
    const navItem= {
        pathHead,
        navList:[
            {path:`/${pathHead}/list`,key:`/${pathHead}/list`,title:`${pathHead} List`},
            {path:`/${pathHead}/add`,key:`/${pathHead}/add`,title:`Add ${pathHead}`},
            {path:`/${pathHead}/upload`,key:`/${pathHead}/upload`,title:`Upload ${pathHead} Spreadsheet`},
        ]
    }
    return navItem
} 
const studentsNav= getSubNav('students')
const schoolsNav= getSubNav('schools')
const volunteersNav= getSubNav('volunteers')
const eventsNav= getSubNav('events')
const usersNav= getSubNav('users')

console.log(studentsNav)

export{studentsNav,schoolsNav,volunteersNav,eventsNav,usersNav}