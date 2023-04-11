
export const secondMarket = async () => {
	const url = "first"
	const params = {
		method: "GET"
	}
	try {
		const response = await fetch(`http://localhost:3000/api/v1/${url}`, params)
		const result = await response.json()
		return result
	} catch (e) {
		console.log("error", e)
	}
}

export const secondMarketPoll = async () => {
	const url = "first/poll"
	const params = {
		method: "GET"
	}
	try {
		const response = await fetch(`http://localhost:3000/api/v1/${url}`, params)
		const result = await response.json()
		return result
	} catch (e) {
		console.log("error", e)
	}
}