import { useState } from "react";


type UserResponse = {
    id: string;
    name: string;
    email: string;
    company: string;
}
export const useFetchUser = () => {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [usersError, setUsersError] = useState("");
    
    try {
        
    } catch (error) {
        
    }
}