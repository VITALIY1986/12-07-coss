import Layout from "../../src/components/Layout";

import Login from "../../src/components/login/register-form";

function App() {

	return (
	<Layout>	
				
	
	
	<div class="relative h-screen overflow-x-hidden bg-blue px-3">
		<div class="h-screen flex justify-center items-center flex-col">
		<h3 className="text-white mb-6 text-xl">Увага!!!</h3>
		<div className="text-white mb-6">Ваш обліковий запис буде активовано та доступ до закритих файлів буде відкрито після отримання нами копії диплома. Чекаємо на копію Вашого диплому на пошту info@4prof.com.ua</div>
	<Login></Login>
	</div>
		<div class="absolute -bottom-40 lg:-bottom-0 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
		<div class="absolute -bottom-40 lg:-bottom-0 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
		<div class="absolute -top-40 lg:-top-0  -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 lg:-top-0 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	
				
	</Layout>
	);
}




export default App;



	