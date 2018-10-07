<template>
	<div id="app" class="container py-5">
		<h1 class="fs-h1 text-center">
			Vuejs Todo app
		</h1>

		<div class="nav text-center mt-3">
			<router-link to="/">Todos</router-link>
			<router-link to="/about">About</router-link>
		</div>

		<div class="main-content mt-5">
			<router-view />
		</div>
		
	</div>
</template>

