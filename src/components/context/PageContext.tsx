import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type TPage = {
	title: string
	lead: string
}

export interface IPageContext {
	page: TPage
	setPage: Dispatch<SetStateAction<TPage>>
}

export const pageInitialContext: IPageContext = {
	page: {
		title: 'A',
		lead: 'B',
	},
	setPage: () => {},
}
export const PageContext = createContext<IPageContext>(pageInitialContext)

export const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [page, setPage] = useState<TPage>(pageInitialContext.page)
	return <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>
}
