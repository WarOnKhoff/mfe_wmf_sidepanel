<style>
.container {
	display: flex;
	flex-direction: column;
}
h1 {
	margin: 40px 0px;
}
.container img {
	width: 100%;
	height: 200px;
}
.img_placeholder:nth-child(odd) {
	margin-bottom: 50px;
}

.container h1 {
	text-align: center;
}
</style>
<template>
	<div class="container">
		<h1>Photos of Riga</h1>
		<div>
			<img
				src="https://cdn.britannica.com/78/115478-050-71EB889C/Old-Town-Latvia-Riga-Daugava-River.jpg"
			/>
		</div>
		<div>
			<img
				src="https://www.fpri.org/wp-content/uploads/2020/09/riga-scaled.jpeg"
			/>
		</div>
		<div>
			<img
				src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e4/cd/2e/town-hall-square.jpg?w=500&h=300&s=1"
			/>
		</div>
	</div>
</template>
