import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";

const Product = ( props ) => {
	const { product } = props;

	
	  








// @TODO CHANGE regularPrice by registe users.



	return (
		// @TODO Need to hndle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="product mb-5   relative bg-white rounded-sm pb-6">



				<Link href={ `/produs/${ product?.slug }`} >
					<a>
						<Image
							className="object-cover bg-gray-100"
							width="500"
							height="500"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</a>
					
				</Link>
				<div className="text-center pl-2 md:pl-3">{product.name}</div>
				<div className="product-info text-center pl-2 md:pl-3">
					
				
				 {product?.salePrice   ?  <div className='block mt-4'>  <div><strike className="  glow-text text-2xl ">{product?.regularPrice}</strike></div><span className='ml-3 text-2xl  px-6 py-1 text-gray-500'>{product?.price}  </span></div> :   <div className=" text-2xl">{product?.price }<span className='ml-2'></span></div>}
				
					<AddToCartButton product={ product } />
				
				</div>

			</div>
		) : (
			''
		)
	);
};

export default Product;