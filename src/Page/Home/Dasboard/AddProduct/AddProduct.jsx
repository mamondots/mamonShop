import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://adrenelin-server-site.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully toasted!',< Toaster
                    position = "top-right"
                    reverseOrder = { false}
                        />)
                        
                }
                console.log(data)
                reset()

            })

        console.log(data)
    }
    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold py-2">Add The Product</h2>
                <p className="text-[#727272]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="px-40 pt-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="flex flex-col space-y-1">
                        <label>Product Title</label>
                        <input {...register("title", { required: true })} className="border w-[100%] outline-none px-4 py-2 rounded " type="text" placeholder="Enter title" />
                        {errors.title && <span className='text-[red] py-1'>title  is required</span>}
                    </div>

                    <div className="flex w-[100%] space-x-3">
                        <div className="flex flex-col space-y-1 w-[100%]">
                            <label>First Image</label>
                            <input {...register("image1", { required: true })} className="border outline-none px-4 py-2 rounded " type="url" placeholder="Enter image" />
                            {errors.image1 && <span className='text-[red] py-1'>image  is required</span>}
                        </div>
                        <div className="flex flex-col space-y-1 w-[100%]">
                            <label>Second Image</label>
                            <input {...register("image2", { required: true })} className="border outline-none px-4 py-2 rounded" type="url" placeholder="Enter image" />
                            {errors.image1 && <span className='text-[red] py-1'>image  is required</span>}
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        <div className="flex flex-col space-y-1 w-[100%]">
                            <label>Product Price</label>
                            <input {...register("price", { required: true })} className="border outline-none px-4 py-2 rounded " type="text" placeholder="Enter price" />
                            {errors.price && <span className='text-[red] py-1'>price  is required</span>}
                        </div>
                        <div className="flex flex-col space-y-1 w-[100%]">
                            <label>Product rating</label>
                            <input  {...register("rating", { required: true })} className="border outline-none px-4 py-2 rounded" type="text" placeholder="Enter rating" />
                            {errors.rating && <span className='text-[red] py-1'>rating  is required</span>}

                        </div>
                    </div>

                    <div className="flex space-x-3">
                        <div className="w-[100%] border outline-none px-4 py-2 rounded ">
                            <select {...register("category", { required: true })} className="flex justify-between items-center w-[100%] outline-none">
                                <option>Choose category</option>
                                <option>man</option>
                                <option>Woman</option>
                                <option>Children</option>
                            </select>
                            {errors.category && <span className='text-[red] py-1'>category  is required</span>}
                        </div>

                        <div className="w-[100%] border  px-4 py-2 rounded ">
                            <select {...register("tag")} className="w-[100%] outline-none">
                                <option>Choose tags</option>
                                <option>man</option>
                                <option>Woman</option>
                                <option>Children</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-1">
                        <label>Description</label>
                        <textarea {...register("description", { required: true })} className="border outline-none px-4 py-2 rounded " type="text" placeholder="Product details" />
                        {errors.description && <span className='text-[red] py-1'>description  is required</span>}
                    </div>

                    <div>
                        <input className="px-8 py-3 bg-[#f2691f] text-white cursor-pointer hover:bg-[#fd5d06] duration-300" type="submit" value="ADD PRODUCT" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;