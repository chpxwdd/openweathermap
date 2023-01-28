import React, { FC } from 'react'

interface TitleProps {
	title: string
	lead?: string
}

const Title: FC<TitleProps> = ({ title, lead }) => {
	return (
		<div className="mt-5">
			<h1>{title}</h1>
			<p className="lead">{lead}</p>
		</div>
	)
}
export default Title
