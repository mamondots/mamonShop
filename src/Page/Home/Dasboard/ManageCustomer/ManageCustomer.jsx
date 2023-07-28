import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageCustomer = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('https://adrenelin-server-site.vercel.app/users')
            return res.json()
        }
    })

    const handleMakeAdmin = person => {
        fetch(`https://adrenelin-server-site.vercel.app/users/admin/${person._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${person.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold py-2">Manage The Users</h2>
                <p className="text-[#727272]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="py-12">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((person,index) => 
                                    <tr key={person._id}>
                                        <th>
                                            {index+1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={person.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {person.name}
                                        </td>
                                        <td>{person.email}</td>
                                        <th className="space-x-2">
                                            {
                                                person.role === 'admin' ?  <button className="px-4 py-2 text-white rounded bg-[#7e2ee8] duration-300 "> Admin</button>:
                                                <button onClick={() => handleMakeAdmin(person)} className="px-4 py-2 bg-[#3ea3fc] text-white rounded hover:bg-[#1691fd] duration-300 ">Make admin</button>
                                            }
                                            
                                            <button  className="px-4 py-2 bg-[#fc3e3e] text-white rounded hover:bg-[#ff1717]  duration-300">Delete</button>
                                        </th>
                                    </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageCustomer;