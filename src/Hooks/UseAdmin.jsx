import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
    const {user} = useContext(AuthContext)
   const {refetch, data:isAdmin,isLoading } =useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async () => {
            const res = await fetch(`https://adrenelin-server-site.vercel.app/users/admin/${user?.email}`)
            return res.data.admin
        }
   })
   return [isAdmin,isLoading,refetch]
};

export default UseAdmin;