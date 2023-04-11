import React from "react"
import { AllRates } from "types"
import styles from "./table-main.module.css"
import useTableData from "../hooks/use-table-data"

const TableMain = React.memo(function TableMain({
	firstRates,
	secondRates,
	thirdRates
}: AllRates) {
	const rowValue = useTableData({ firstRates, secondRates, thirdRates })

	return (
		<>
			<table className={styles.table}>
				<tbody>
					<tr>
						{["Pair name/market", "First", "Second", "Third"].map(el => {
							return <th key={el}>{el}</th>
						})}
					</tr>
					{rowValue.map(item => {
						return (
							<tr key={item.title}>
								<td>{item.title}</td>
								<td
									className={
										item.firstValue <= item.secondValue &&
										item.firstValue <= item.thirdValue
											? styles.active
											: null
									}
								>
									{item.firstValue.toFixed(2)}
								</td>
								<td
									className={
										item.secondValue < item.firstValue &&
										item.secondValue <= item.thirdValue
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
})

export default TableMain
