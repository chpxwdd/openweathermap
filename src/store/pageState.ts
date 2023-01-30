import * as React from 'react'

const initialState = {
	title: 'Page title',
	lead: 'page lead',
}

// export type TPageState = typeof initialState
export type TPageState = {
	title: string
}
export default initialState
