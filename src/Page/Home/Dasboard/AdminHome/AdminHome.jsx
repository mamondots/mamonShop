
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
const AdminHome = () => {
    const data = [
        {
            name: 'products',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Woman',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Man',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Children',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Shoes',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'jewellery',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        
    ];
    return (
        <div className="px-12 py-12">
            <div className="grid lg:grid-cols-3 lg:gap-4 text-center text-[#262626] text-2xl font-semibold">
                <div className="bg-[#8a5cf649] p-10">
                    <h2>Total Product</h2>
                    <p>126</p>
                </div>
                <div className="p-10 bg-[#14b8a54d]">
                    <h2>Total Customer</h2>
                    <p>306</p>
                </div>
                <div className="p-10 bg-[#efdc8f44]">
                    <h2>Total Sell</h2>
                    <p>$426</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-4 py-2 text-white text-2xl font-bold'>
                <div className=''>
                    <p className='py-5 bg-[#0E90F2] flex justify-center items-center'><FaFacebookF></FaFacebookF></p>

                </div>
                <div>
                    <p className='py-5 bg-[#1D9BF0] flex justify-center items-center'><FaTwitter></FaTwitter></p>

                </div>
                <div className='text-center'>
                    <p className='py-5 bg-[#C905DE] flex justify-center items-center'><FaInstagram></FaInstagram></p>

                </div>
            </div>

            <div className='chart'>
                <div className='mt-12'>
                    
                        <LineChart
                            width={900}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminHome;