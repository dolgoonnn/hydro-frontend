<template>
	<section class="flex items-center h-full p-16 bg-cwhite text-gray-500">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-500">
					<span class="sr-only">Error</span>404
				</h2>
				<p class="text-2xl font-semibold md:text-3xl">Хуудас олдсонгүй.</p>
				<p class="mt-4 mb-8 :text-gray-500">Таны хандсан хуудас сайтад байхгүй тул өөр хуудас луу хандана уу.</p>
                <router-link to="/">
				    <a rel="noopener noreferrer" class="px-8 py-3 font-semibold rounded text-white bg-ccblue hover:bg-chblue">Нүүр лүү буцах</a>

                </router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default{

}
</script>