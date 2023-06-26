import { FC, useState, useEffect } from 'react';
import { UserContext } from '.';


import { supabase } from '../../supabase';
import { Patient } from '../../interfaces/patient';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const UserProvider:FC<PropsProvider> = ({ children }) => {
    const [patients, setPatients] = useState([] as Patient[])
    // const [employees, setEmployees] = useState([])

    const [isLoading, setIsLoading] = useState(false);



    const getAllUsers = async (): Promise<void> => {
        try {
            setIsLoading( true );
            const { data: pacientes } = await supabase
                .from('pacientes')
                .select('*')

            setPatients( pacientes as Patient[] );
            setIsLoading( false );

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading( false );
        }
    }

    const createNewPatient = async (newPatient:{ ci: number; nombre: string; apellidos: string; historial_clinico: string }): Promise<void> => {
        try {
            await supabase.from('pacientes').insert([ newPatient ]);
            getAllUsers();
        } catch (error) {
            console.log(error);
        }
    }

    const deletePatient = async ( id:number): Promise<void> => {
        try {
            const { error } = await supabase.from('pacientes').delete().eq('id', id);
            if( !error ){
                getAllUsers();
                return;
            }
            console.log(error);
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getAllUsers();
    }, [])
    

    return (
        <UserContext.Provider value={{
            isLoading,
            patients,
            
            createNewPatient,
            deletePatient
        }}>
            { children }
        </UserContext.Provider>
    )
}