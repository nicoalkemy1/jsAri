const showPurchase = async () => {

	let totalUSD

	try {
		totalPesos = calcTotal()
		const usd = await calcTotalUSD()
		const total = (totalPesos / usd).toFixed(2)
		totalUSD = `<a href="">Puedes pagarlo en USD ($${total}) mediante Paypal por aquí</a>`
	}

	catch (err) {
		totalUSD = '(No es posible pagar de momento en USD)'
	}

	finally {
		Swal.fire({
			icon: 'success',
			title: 'Compra realizada!',
			text: `Ahora envía una transferencia al alias PATITO.COLOR.CAFE con el monto de: $${calcTotal()}`,
			footer: totalUSD
		})
	}
}