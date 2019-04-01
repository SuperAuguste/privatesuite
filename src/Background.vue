<template>
	<div id="background">
		
<!-- BACKGROUND -->
<!-- <canvas ref="canvas"/> -->

	</div>
</template>

<script>
const THREE = global.THREE = require('three');

export default {
	name: 'Index',
	components: {
	},
	data () {
		return {
			
		}
	},
	props: [
		'mouseX',
		'mouseY'

	],
	mounted() {
		this.setUpScene();
		//  this.torus();
		this.mouseLocation();

		 this.cube();
		 this.render();
		 this.runAnimation();
	},
	 methods: {
				setUpScene() {

						this.scene = new THREE.Scene();

								this.light = new THREE.PointLight(0xED4747,50, 0, 30); 
								this.light.position.set(400, 200, -500);
								this.scene.add(this.light);

								this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
								this.camera.position.x = 0;
								this.camera.position.y = 0;
								this.camera.position.z = 0;
								this.renderer = new THREE.WebGLRenderer({alpha: true});
								this.renderer.setSize(window.innerWidth, window.innerHeight);

								this.$el.appendChild(this.renderer.domElement);
						
				},
				torus() {
							 var torus = new THREE.TorusGeometry( 10, 3, 16, 100 );
								var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: true });
								this.donut = new THREE.Mesh(torus, material);
								this.scene.add(this.donut);

						//change camera position
								this.donut.position.x = 40;
								this.donut.position.y = 0; 
								this.donut.position.z = -30; 
				},
				mouseLocation() {
					this.mouse = new THREE.Vector2();
					this.raycaster = new THREE.Raycaster();

					 this.renderer.domElement.addEventListener('mousemove', (e) => {
						this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
						this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
						this.clientX = e.clientX;
						this.clientY = e.clientY;
						this.raycaster.setFromCamera(this.mouse, this.camera);
					 });

				},
					cube() {
							 var cube = new THREE.TorusGeometry( 10, 20, 0);
								var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: true });
								this.cube = new THREE.Mesh(cube, material);
								this.cube2 = new THREE.Mesh(cube, material);
								this.cube3 = new THREE.Mesh(cube, material);
								this.cube4 = new THREE.Mesh(cube, material);



								this.scene.add(this.cube, this.cube2, this.cube3, this.cube4);

						//change camera position
								this.cube.position.x = 0;
								this.cube.position.y = 0; 
								this.cube.position.z = 10; 
								
								this.cube2.position.z = -50; 
								this.cube3.position.z = -30; 
								this.cube4.position.z = -10; 


				},
				render() {
						this.renderer.render(this.scene, this.camera);
				},
				runAnimation() {
						requestAnimationFrame(this.runAnimation);
						this.cube.rotation.y -= 0.01;
						this.cube2.rotation.y += 0.01;
						this.cube.rotation.x += 0.01;
						this.cube2.rotation.x -= 0.01;
						this.cube3.rotation.x += 0.01;
						this.cube4.rotation.y -= 0.01;
						

						this.camera.position.x = (window.innerWidth / 2 - this.mouseX) /30;
						this.camera.position.y = -(window.innerHeight / 2 - this.mouseY) / 30;



						this.render();
				}
}
}
</script>

<style>

canvas {
	position: fixed;
	/* background: none; */
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}

</style>
