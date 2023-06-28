import { createContext } from 'react'
import { Patient } from '../../interfaces/patient';
import { Employee } from '../../interfaces/employee';

interface ContextProps {
    isLoading: boolean;
    patients: Patient[];
    employees: Employee[];

    createNewPatient: (newPatient:{ ci: number; nombre: string; apellidos: string; historial_clinico: string }) => Promise<void>
    deletePatient: (id: number) => Promise<void>;
    deleteEmployee: (id: number) => Promise<void>;
    createNewEmpleado: (newEmployee: {
        ci: number;
        nombre: string;
        apellidos: string;
        descripcion: string;
        password: string;
        rol: number;
    }) => Promise<void>
}

export const UserContext = createContext( {} as ContextProps );