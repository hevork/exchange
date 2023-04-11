import React from "react"
import { firstMarket, firstMarketPoll } from "src/api/first-source/firstMarket"
import { secondMarket, secondMarketPoll } from "src/api/second-source/secondMarket"
import { thirdMarket, thirdMarketPoll } from "src/api/third-source/thirdMarket"
import useMarket from "src/components/hooks/useMarket"
// interface rates {
// 	EUR: number;
// 	RUB: number;
// 	USD: number;
// }
function App() {
	
	const firstRates =useMarket({marketRequest:firstMarket,marketPullRequest: firstMarketPoll})
	const secondRates =useMarket({marketRequest:secondMarket,marketPullRequest: secondMarketPoll})
	const thirdRates =useMarket({marketRequest:thirdMarket,marketPullRequest: thirdMarketPoll})
	return (
		<div>
			<h1>test</h1>
			<h3>
				{firstRates.EUR.toFixed(2)}{" "}
				{firstRates.RUB.toFixed(2)}{" "}
				{firstRates.USD.toFixed(2)}
			</h3>
			<h3>
				{secondRates.EUR.toFixed(2)}{" "}
				{secondRates.RUB.toFixed(2)}{" "}
				{secondRates.USD.toFixed(2)}
			</h3>
			<h3>
				{thirdRates.EUR.toFixed(2)}{" "}
				{thirdRates.RUB.toFixed(2)}{" "}
				{thirdRates.USD.toFixed(2)}
			</h3>
		</div>
	)
}

export default App
