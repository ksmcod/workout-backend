import { createContext } from "react";


export const WorkoutContext = createContext();


export default function WorkoutContextProider({ children }) {
  return (
    <WorkoutContext.Provider value={{}}>
        { children }
    </WorkoutContext.Provider>
  )
}
