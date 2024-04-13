'use client'
import { Provider } from 'react-redux'
import { store } from './store'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{/* Use the Provider component to provide the Redux store to the entire component tree. */}
			<Provider store={store}>{children}</Provider>
		</>
	)
}