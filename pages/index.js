import Layout from "../src/components/Layout";

import client from '../src/components/ApolloClient';
import ProductHome from "../src/components/ProductHomePage";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";

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

	
	




	
	
	const { productCategories,heroCarousel,featuredproducts } = props || {};




     
	
	
	

	return (
	
		
			<Layout>
				<Head>
      
	  <title>Vitamine și minerale naturale direct de la producător. C.O.S. Laboratories</title>
	  <meta name="description" content="Vitamine și minerale de la producător. Deoarece suntem producători, oferim preț favorabil și calitate înaltă."/>
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
		<div className="text-justify  mt-10 mx-3">
	<h1 className="font-semibold lg:text-center">Bine ați venit la C.O.S Laboratories- Sursa dumneavoastră de sănătate și vitalitate!</h1>
	<p className="mt-3 lg:text-center">Corpul nostru este o sistemă complexă, care necesită o varietate de substanțe nutritive pentru a menține sănătatea și bunăstarea. La Laboratoarele C.O.S, înțelegem cât de important este să aveți acces la vitamine și minerale de înaltă calitate pentru a vă menține energia, imunitatea și starea generală de sănătate la un nivel optim. Oferim o gamă largă de produse pentru sănătatea creierului, digestie, energie, întărirea imunității, sănătatea inimii, precum și pentru frumusețea pielii, părului și unghiilor.</p>
	<h2 className="font-bold mt-6 lg:text-center">De ce să ne alegeți?</h2>
	<p className="mt-3"><strong>Gama largă de produse:</strong> Catalogul nostru include doar cele mai bune vitamine și suplimente minerale, cu ingrediente de la producătorii de materii prime de top, inclusiv formule exclusive pentru susținerea complexă a sănătății dumneavoastră.</p>
<p><strong>Garantarea calității:</strong> Selectăm cu atenție produsele, acordând atenție compoziției lor, sursei și eficacității, astfel încât să puteți avea încredere în fiecare achiziție.</p>
<p ><strong>Abordare individualizată:</strong> Indiferent dacă căutați suport pentru sănătatea creierului sau doriți să vă îmbunătățiți rezistența fizică, avem tot ce vă trebuie pentru a vă atinge obiectivele.
</p>
	<p><strong>Sănătatea creierului:</strong> De la mioinozitol la vitamine din grupa B, suplimentele noastre vă vor susține funcțiile cognitive, memoria și concentrarea.</p>
	<p><strong>Digestie: </strong>Îmbunătățiți digestia și absorbția substanțelor nutritive cu produsele noastre pe bază de aloe vera și zinc.</p>
	<p><strong>Energie și vitalitate: </strong>Combateți oboseala și mențineți-vă activi pe tot parcursul zilei cu complexele noastre energetice și coenzima Q10.</p>
	<p><strong>Imunitate: </strong>Consolidați-vă imunitatea cu ajutorul vitaminelor noastre D3, C și al suplimentelor imunostimulatoare speciale.</p>
	<p><strong>Sănătatea inimii:</strong>Susțineți inima și vasele de sânge cu produsul nostru pe bază de coenzima Q10 și acidul folic (B9).</p>
	<p><strong>Frumusețe și sănătate: </strong>Pentru oase puternice, păr mătăsos, unghii puternice și o piele strălucitoare - alegeți complexele noastre de vitamine și minerale.</p>
	<p className="mt-3">Alăturați-vă comunității noastre pentru sănătate și stare de bine încă de astăzi! Răsfoiți catalogul nostru pentru a găsi suplimentele perfecte, care să corespundă nevoilor dumneavoastră individuale ce țin de sănătate. Dacă aveți întrebări sau aveți nevoie de ajutor în selectarea produselor, echipa noastră de experți este întotdeauna pregătită să vă ajute.</p>
	<p className="mt-3"><strong>Calea dumneavoastră către o sănătate mai bună începe aici, la C.O.S. Laboratories. Descoperiți puterea vitaminelor și mineralelor și faceți un pas către un stil de viață sănătos încă de astăzi!</strong></p>
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
			


	




			

		









	
		
	{/*Hero 5*/}	
	<div className="products container mx-auto my-10  ">
	<h2 className="text-2xl ml-3 uppercase mt-20 text-center font-semibold">PRODUSE</h2>	
		
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
				{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id }  product={ product }/> )
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
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : []
		},
		revalidate: 1
	}

};