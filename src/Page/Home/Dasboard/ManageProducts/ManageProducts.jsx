import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const ManageProducts = () => {
    const { refetch, data: products = [] } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch('https://adrenelin-server-site.vercel.app/products')
            return res.json()
        }
    })

    const handleDelete = product =>{

        fetch(`https://adrenelin-server-site.vercel.app/products/${product._id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            refetch()
        })
    }

    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold py-2">Manage The Product</h2>
                <p className="text-[#727272]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="py-12">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product,index) => <tr key={product._id}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.title}

                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <th className="space-x-2">
                                        <Link to={`/dasboard/updatedproduct/${product._id}`}>
                                        <button className="px-4 py-2 rounded text-white bg-[#6a976a]">Update</button>
                                        </Link>
                                        <button onClick={() => handleDelete(product)} className="px-4 py-2 rounded text-white bg-[#8e5959]">Delete</button>
                                    </th>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;