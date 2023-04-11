import React from "react"
import { AllRates } from "types"
import styles from "./table-main.module.css"
function TableMain({ firstRates, secondRates, thirdRates }: AllRates) {
	const cupcake = 1.5
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
	
	return (
		<>
			<table className={styles.table}>
				<tbody>
					<tr>
						<th>Pair name/market</th>
						<th>First</th>
						<th>Second</th>
						<th>Third</th>
					</tr>
					{rowValue.map(item => {
						return (
							<tr key={item.title}>
								<td>{item.title}</td>
								<td
									className={
										item.firstValue < item.secondValue &&
										item.firstValue < item.thirdValue
											? styles.active
											: null
									}
								>
									{item.firstValue.toFixed(2)}
								</td>
								<td
									className={
										item.secondValue < item.firstValue &&
										item.secondValue < item.thirdValue
											? styles.active
											: null
									}
								>
									{item.secondValue.toFixed(2)}
								</td>
								<td
									className={
										item.thirdValue < item.firstValue &&
										item.thirdValue < item.secondValue
											? styles.active
											: null
									}
								>
									{item.thirdValue.toFixed(2)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export default TableMain
