import React from "react"
import {
	thirdMarket,
	thirdMarketPoll,
	secondMarket,
	secondMarketPoll,
	firstMarket,
	firstMarketPoll
} from "src/api"
import useMarket from "src/components/hooks/useMarket"
import TableMain from "./components/table-main/table-main"
import "./index.css"
function App() {
	const firstRates = useMarket({
		marketRequest: firstMarket,
		marketPullRequest: firstMarketPoll
	})
	const secondRates = useMarket({
		marketRequest: secondMarket,
		marketPullRequest: secondMarketPoll
	})
	const thirdRates = useMarket({
		marketRequest: thirdMarket,
		marketPullRequest: thirdMarketPoll
	})
	return (
		<div className="container">
			<TableMain
				thirdRates={thirdRates}
				secondRates={secondRates}
				firstRates={firstRates}
			/>
		</div>
	)
}

export default App
