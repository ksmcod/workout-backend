import { useState } from 'react'
import useAuthContext from './useAuthContext'

export default function useSignUp() {
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    async function signup(email,password) {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/signup`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok) {
            // save the user to local storage
            localStorage.setItem('user',JSON.stringify(json));

            // update the auth context
             dispatch({ type:'LOGIN', payload:json });

             setIsLoading(false);
        }
    }
  return (
     { signup, error, isLoading }
  )
}
