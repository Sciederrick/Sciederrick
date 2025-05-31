<template>
	<div class="white-layout">
		<slot />
	</div>
</template>

<style scoped>
.white-layout {
	min-height: 100dvh;
	min-height: 100vh;
	width: 100vw;
	background: #fff;
	position: fixed;
	inset: 0;
	overflow-y: auto;
}
</style>