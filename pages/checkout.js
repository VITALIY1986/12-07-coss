import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

const Checkout = ({data}) => (
	<Layout>
		<div className="checkout container mx-auto my-32 px-4 xl:px-0">
			<h1 className="mb-5 text-2xl uppercase">PAGINA PROCESUL COMANDA</h1>
			<CheckoutForm />
		</div>
	</Layout>
);

export default Checkout;



