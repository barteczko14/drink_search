const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchDrink = (e) => {
	li.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
			el.style.display = 'block'
		}
		else{
			el.style.display = 'none'
		}
	})

	}

search.addEventListener('keyup',searchDrink)



