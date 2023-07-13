import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';



export default function Categories ( props ) {

	const { productCategorArkanaHome,  heroCarousel } = props;

	return (
		<Layout>
            	
			{/*Categories*/}
			<div className=" flex justify-around flex-wrap  mx-4 py-20">
            <div className="text-center md:w-2/6 py-10">
	
	  <h3 className="text-xl font-semibold">KATIGLIKO SRL</h3>
      <span class="inline-block h-1 w-1/3 rounded bg-red-500 mt-6 mb-4"></span>
		   <p className="mt-2 md:mx-3">RO 33917523</p>
           <p className="mt-2 md:mx-3">J22/1888//2014</p>
		</div>
        <div className="text-center md:w-2/6 py-10">
	
	  <h3 className="text-xl font-semibold">ADRESA</h3>
      <span class="inline-block h-1 w-1/3 rounded bg-red-500 mt-6 mb-4"></span>
		   <p className="mt-2 md:mx-3">Str. Sf. Ioan nr.25</p>
           <p className="mt-2 md:mx-3">Iași, România.</p>
		</div>
        <div className="text-center md:w-2/6 py-10">
	
	  <h3 className="text-xl font-semibold">CONTACT</h3>
       <span class="inline-block h-1 w-1/3 rounded bg-red-500 mt-6 mb-4"></span>
		   <p className="mt-2 md:mx-3">+40 743 505 206</p>
           <p className="mt-2 md:mx-3">office@cos-laboratories.com</p>
		</div>
       
			</div>
		</Layout>
	)
};