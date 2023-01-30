import * as React from 'react'
import { Button, Form } from 'react-bootstrap'

interface ICustomFormProps {
	onSubmit?(): any
	handleSubmit?(): any
}

const CustomForm: React.FC<ICustomFormProps> = ({ onSubmit, handleSubmit }) => {
	const [value, setValue] = React.useState<string>('')

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}
	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {}

	return (
		<Form onSubmit={onSubmit}>
			<Form.Control type="text" value={value} onChange={handleChange} />
			<Button type="submit" onClick={handleSubmit}>
				run
			</Button>
		</Form>
	)
}

export default CustomForm
