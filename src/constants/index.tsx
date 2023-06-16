import { IMenu } from "../interfaces";

import { FiUsers } from "react-icons/fi";
import { CiGrid41, CiMedicalMask, CiCalendar } from "react-icons/ci";

export const ADMIN_MENU: IMenu[] = [
    {
        icon: <CiGrid41/>,
        name: 'Dashboard',
        path: '/',
    },
    {
        icon: <CiCalendar/>,
        name: 'Consultas',
        path: '/quotes',
    },
    {
        icon: <CiMedicalMask/>,
        name: 'Empleados',
        path: '/employees',
    },
    {
        icon: <FiUsers/>,
        name: 'Pacientes',
        path: '/clients'
    }

];


export const EMPLOYEE_MENU: IMenu[] = [
    {
        icon: <CiGrid41/>,
        name: 'Dashboard',
        path: '/',
    },
    {
        icon: <CiCalendar/>,
        name: 'Consultas',
        path: '/quotes',
    },
    {
        icon: <FiUsers/>,
        name: 'Pacientes',
        path: '/clients'
    }

]