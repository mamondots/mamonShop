import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const BestSellerDetails = ({ product }) => {
    const { image1, image2, title, rating, price, category, tag, _id } = product
    return (
        <div>
            <div className="border relative  px-2 overflow-hidden">
                <img className="pt-4" src={image1} alt="" />
                <img className="absolute top-0 opacity-0 hover:opacity-[1] duration-300" src={image2} alt="" />
            </div>
            <div className="text-center py-2 flex items-center flex-col">
                <p className="font-medium text-[#2626265c]">{tag}</p>
                <h2 className="font-medium text-[#262626]">{title}</h2>
               
                <p className='py-1'>
                    <Rating
                        style={{ maxWidth:80 }}
                        value={rating}
                        readOnly
                    />
                </p>
               
                <p className='text-[#DA4600] text-lg'>${price}</p>
                <Link to={`/singleproduct/${_id}`}>
                <button className='px-4 py-2 border mt-2 text-[#2626267a] hover:text-[#DA4600] duration-300 hover:border-[#DA4600]'>View Now</button>
                </Link>
            </div>
        </div>
    );
};

export default BestSellerDetails;