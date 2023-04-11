import { useEffect, useState } from "react"
type Props = {
	marketRequest: () => Promise<any>;
	marketPullRequest: () => Promise<any>;
};
interface rates {
	EUR: number;
	RUB: number;
	USD: number;
}
function App({ marketRequest, marketPullRequest }: Props) {
	const [itemRates, setItemRates] = useState<rates>({
		EUR: 0,
		RUB: 0,
		USD: 0
	})
	const [itemRatesPoll, setItemRatesPoll] = useState<rates>({
		EUR: 0,
		RUB: 0,
		USD: 0
	})
	const getMarketData = async () => {
		const { rates } = await marketRequest()
		if (rates) {
			setItemRates(rates)
		}
	}
	const connectPoll = async () => {
		try {
			const { rates } = await marketPullRequest()
			if (
				rates.USD !== itemRatesPoll.USD ||
				rates.EUR !== itemRatesPoll.EUR ||
				rates.RUB !== itemRatesPoll.RUB
			) {
				setItemRatesPoll(rates)
			}
			await connectPoll()
		} catch (e) {
			setTimeout(() => {
				connectPoll()
			}, 100)
		}
	}
	useEffect(() => {
		getMarketData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemRatesPoll])

	useEffect(() => {
		getMarketData()
		connectPoll()
	}, [])

	return itemRates
}

export default App
