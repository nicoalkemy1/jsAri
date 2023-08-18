const funcionPromesa = (value) =>
	new Promise((resolve, reject) => {

		if (value === 1) {
			resolve('es igual a 1')
		}
		else {
			reject('Es otro valor')
		}
	})


// funcionPromesa(2)
// 	.then((res) => alert(res))
// 	.catch((err) => alert(err))

// console.log('terminé')

const insertPokemon = (pokemon) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
		.then(res => res.json())
		.then(data => {
			const body = document.querySelector('body')
			const img = document.createElement('img')
			img.src = data.sprites.other['official-artwork'].front_default
			body.append(img)
		})
		.catch(err => console.log('Hubo un error', err))
}


insertPokemon('ditto')
insertPokemon('haunter')
insertPokemon('pikachu')
insertPokemon('charmander')
insertPokemon('chikorita')
insertPokemon('mewtwo')
insertPokemon('togepi')
insertPokemon('mew')
insertPokemon('bulbasaur')
