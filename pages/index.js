import Layout from "../src/components/Layout";

import client from '../src/components/ApolloClient';
import ProductHome from "../src/components/ProductHomePage";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import Post from "../src/components/Post";
import Head from "next/head"
import HeroCarousel from "../src/components/home/hero-carousel";




import ParentCategoryBlock from "../src/components/category/category-block/ParentCategoryBlock";

import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Home (props) {

	
	




	
	
	const { productCategories,heroCarousel,featuredproducts,news} = props || {};




     
	
	
	

	return (
	
		
			<Layout>
				<Head>
      
	  <title>Vitamine si minerale naturale direct de la producator. C.O.S. Laboratories</title>
	  <meta name="description" content="Vitamine si minerale de la producator. Deoarece suntem producatori, oferim pret favorabil si calitate inalta."/>
	  <meta name="google-site-verification" content="iYTg6Zq-Rc5oYebATvttwS8GweL_qIB-bG4Ev_V4XWg" />
	  <meta name="robots" content="index,follow" />
	
	</Head>
				<Script strategy="lazyOnload">
        {`
            window.replainSettings = { id: '57c23d8c-ad58-4f57-b0bc-d65f546cf0d4' };
            (function(u){var s=document.createElement('script');s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
        `}
      </Script>
				{/*Hero1*/}
	<div  className="main  ">
	<HeroCarousel heroCarousel={heroCarousel}/>
	<div className="wt-braun"></div>
	<div className="products container mx-auto my-20  ">
	
		<div className="text-justify  mt-10 mx-3">
	<h1 className="font-semibold lg:text-center">Vitamine si Minerale pentru Sanatate si Vitalitate - Bine ati venit la C.O.S Laboratories!!</h1>
	<p className="mt-3 lg:text-center">Corpul nostru este o sistema complexa, care necesita o varietate de substante nutritive pentru a mentine sanatatea si bunastarea. La Laboratoarele C.O.S, intelegem cât de important este sa aveti acces la vitamine si minerale de inalta calitate pentru a va mentine energia, imunitatea si starea generala de sanatate la un nivel optim. Oferim o gama larga de produse pentru sanatatea creierului, digestie, energie, intarirea imunitatii, sanatatea inimii, precum si pentru frumusetea pielii, parului si unghiilor.</p>
	<h2 className="font-bold mt-6 lg:text-center">De ce sa ne alegeti?</h2>
	<p className="mt-3"><strong>Gama larga de produse:</strong> Catalogul nostru include doar cele mai bune vitamine si suplimente minerale, cu ingrediente de la producatorii de materii prime de top, inclusiv formule exclusive pentru sustinerea complexa a sanatatii dumneavoastra.</p>
<p><strong>Garantarea calitatii:</strong> Selectam cu atentie produsele, acordând atentie compozitiei lor, sursei si eficacitatii, astfel incât sa puteti avea incredere in fiecare achizitie.</p>
<p ><strong>Abordare individualizata:</strong> Indiferent daca cautati suport pentru sanatatea creierului sau doriti sa va imbunatatiti rezistenta fizica, avem tot ce va trebuie pentru a va atinge obiectivele.
</p>
	<p><strong>Sanatatea creierului:</strong> De la mioinozitol la vitamine din grupa B, suplimentele noastre va vor sustine functiile cognitive, memoria si concentrarea.</p>
	<p><strong>Digestie: </strong>imbunatatiti digestia si absorbtia substantelor nutritive cu produsele noastre pe baza de aloe vera si zinc.</p>
	<p><strong>Energie si vitalitate: </strong>Combateti oboseala si mentineti-va activi pe tot parcursul zilei cu complexele noastre energetice si coenzima Q10.</p>
	<p><strong>Imunitate: </strong>Consolidati-va imunitatea cu ajutorul vitaminelor noastre D3, C si al suplimentelor imunostimulatoare speciale.</p>
	<p><strong>Sanatatea inimii:</strong>Sustineti inima si vasele de sânge cu produsul nostru pe baza de coenzima Q10 si acidul folic (B9).</p>
	<p><strong>Frumusete si sanatate: </strong>Pentru oase puternice, par matasos, unghii puternice si o piele stralucitoare - alegeti complexele noastre de vitamine si minerale.</p>
	<p className="mt-3">Alaturati-va comunitatii noastre pentru sanatate si stare de bine inca de astazi! Rasfoiti catalogul nostru pentru a gasi suplimentele perfecte, care sa corespunda nevoilor dumneavoastra individuale ce tin de sanatate. Daca aveti intrebari sau aveti nevoie de ajutor in selectarea produselor, echipa noastra de experti este intotdeauna pregatita sa va ajute.</p>
	<p className="mt-3"><strong>Calea dumneavoastra catre o sanatate mai buna incepe aici, la C.O.S. Laboratories. Descoperiti puterea vitaminelor si mineralelor si faceti un pas catre un stil de viata sanatos inca de astazi!</strong></p>
	</div>	















	
			{/*Categories*/}
		<h2 className="text-2xl ml-3 uppercase mt-20 text-center font-semibold">CATALOG</h2>
			<div className=" flex flex-wrap  justify-around my-10">
					
	
			<Swiper
			breakpoints={{
				// when window width is >= 640px
			 
				768: {
				
				  slidesPerView: 6,
				},
			  }}
								autoplay={{
								  delay: 2500,
								  disableOnInteraction: false,
								}}
								modules={[Autoplay]}
				
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				  >

				{ productCategories.length ? (
							productCategories
							.filter(category => category.slug !== "par-landing")
							.filter(category => category.slug !== "uncategorized")
							.filter(category => category.slug !== "vitamine-minerale")
							.filter(category => category.slug !== "advertising-package")
							.filter(category => category.slug !== "offers")
							.filter(category => category.slug !== "aloe-vera-pacheta-3-1")
							.filter(category => category.slug !== "pachete-promotionale")
							.filter(category => category.slug !== "pachet-frumusete-si-stare-de-bine")
							.map( category =>		<SwiperSlide > <ParentCategoryBlock category={ category }/> </SwiperSlide>)
						) : '' }
					</Swiper>	    
			
			</div>
			


	


			</div>

			

		









	
		
	{/*Hero 5*/}	
	<div className="products container mx-auto my-10  ">
	<h2 className="text-2xl ml-3 uppercase mt-20 text-center font-semibold">PRODUSE</h2>	
		
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
				{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id }  product={ product }/> )
						) : '' }
							</div>
					
			
							
					
				
			

			
				</div>
		
					<div className="products container mx-auto my-32 px-4 ">
					<h2 className="text-2xl ml-3 uppercase mt-20 text-center font-semibold">Blog</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-10">
						{ news.length ? (
							news.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>
				
			
			</div>
		
				
			</Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
			questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			news: data?.news?.posts?.nodes ? data.news.posts.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : []
		},
		revalidate: 1
	}

};