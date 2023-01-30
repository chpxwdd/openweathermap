import * as React from 'react'
import { PageContext, IPageContext, pageInitialContext } from './context/PageContext'

const Title: React.FunctionComponent = () => {
	const { page } = React.useContext<IPageContext>(PageContext)
	return (
		<div className="mt-5">
			<h1>{page.title}</h1>
			<p className="lead">{page.lead}</p>
		</div>
	)
}
export default Title
