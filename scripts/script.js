const usuariosContenedor = document.querySelector('#usuarios');
const posteosContenedor = document.querySelector('#posteos');

async function traerUsuarios() {
	let response = await fetch('http://dwfsinstagram.ddns.net/users');
	let arrayDeUsuarios = response.json();
	return arrayDeUsuarios;
}

traerUsuarios().then((resultado) => {
	console.log(resultado);
	for (let i = 0; i < resultado.length; i++) {
		const element = resultado[i];

		let nuevoDiv = document.createElement('div');
		nuevoDiv.setAttribute('class', 'contenedor-usuario');

		let imagenUsuario = document.createElement('img');
		imagenUsuario.setAttribute('class', 'imagen-usuario');
		imagenUsuario.setAttribute('alt', `${element.username}`);
		imagenUsuario.setAttribute('src', `${element.img}`);

		let nombreUsuario = document.createElement('p');
		nombreUsuario.setAttribute('class', 'nombre-usuario');
		nombreUsuario.innerText = element.username;

		nuevoDiv.appendChild(imagenUsuario);
		nuevoDiv.appendChild(nombreUsuario);
		usuariosContenedor.appendChild(nuevoDiv);
	}
});

async function mostrarPosteo() {
	let response = await fetch('http://dwfsinstagram.ddns.net/posts');
	let arrayDePosteos = response.json();
	return arrayDePosteos;
}

mostrarPosteo().then((resultado) => {
	console.log(resultado);
	for (let i = 0; i < resultado.length; i++) {
		const element = resultado[i];

		let divNuevoPost = document.createElement('div');
		divNuevoPost.setAttribute('class', 'contenedor-posteo');

		let divImagenUsuario = document.createElement('div');
		divImagenUsuario.setAttribute('class', 'contenedor-imagen-usuario');

		let imagenUsuario = document.createElement('img');
		imagenUsuario.setAttribute('class', 'imagen-posteo');
		imagenUsuario.setAttribute('src', `${element.userData.img}`);

		let nombreUsuario = document.createElement('p');
		nombreUsuario.setAttribute('class', 'usuario-posteo');
		nombreUsuario.innerHTML = element.userData.name;

		let divGif = document.createElement('div');
		divGif.setAttribute('class', 'contenedor-gif');

		let gifPosteado = document.createElement('img');
		gifPosteado.setAttribute('class', 'gif-posteo');
		gifPosteado.setAttribute('src', `${element.post_gif_url}`);

		let corazon = document.createElement('div');
		corazon.innerHTML = `<span class="material-icons">
        favorite_border
        </span><span>Likes 0</span>`;

		divImagenUsuario.appendChild(imagenUsuario);
		divImagenUsuario.appendChild(nombreUsuario);
		divGif.appendChild(gifPosteado);
		divNuevoPost.appendChild(divImagenUsuario);
		divNuevoPost.appendChild(divGif);
		divNuevoPost.appendChild(corazon);

		posteosContenedor.appendChild(divNuevoPost);
	}
});
