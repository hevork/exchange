import { CUPCAKE } from "../../config"
import { AllRates } from "types"
function useTableData({ firstRates, secondRates, thirdRates }: AllRates) {
	const cupcake = CUPCAKE
	const rowValue = [
		{
			title: "RUB/CUPCAKE",
			firstValue: firstRates.RUB / cupcake,
			secondValue: secondRates.RUB / cupcake,
			thirdValue: Math.abs(thirdRates.RUB / cupcake)
		},
		{
			title: "USD/CUPCAKE",
			firstValue: firstRates.USD / cupcake,
			secondValue: secondRates.USD / cupcake,
			thirdValue: Math.abs(thirdRates.USD / cupcake)
		},
		{
			title: "EUR/CUPCAKE",
			firstValue: firstRates.EUR / cupcake,
			secondValue: secondRates.EUR / cupcake,
			thirdValue: Math.abs(thirdRates.EUR / cupcake)
		},
		{
			title: "RUB/USD",
			firstValue: firstRates.RUB / firstRates.USD,
			secondValue: secondRates.RUB / firstRates.USD,
			thirdValue: Math.abs(thirdRates.RUB / firstRates.USD)
		},
		{
			title: "RUB/EUR",
			firstValue: firstRates.RUB / firstRates.EUR,
			secondValue: secondRates.RUB / firstRates.EUR,
			thirdValue: Math.abs(thirdRates.RUB / firstRates.EUR)
		},
		{
			title: "EUR/USD",
			firstValue: firstRates.EUR / firstRates.USD,
			secondValue: secondRates.EUR / firstRates.USD,
			thirdValue: Math.abs(thirdRates.EUR / firstRates.USD)
		}
	]

	return (rowValue)
}

export default useTableData