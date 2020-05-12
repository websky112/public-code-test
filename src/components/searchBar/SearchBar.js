import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Search } from '@material-ui/icons'

import './SearchBar.scss'

const ColoredTextField = withStyles({
	root: {
		'& input:valid + fieldset': {
			borderColor: '#323232',
			borderWidth: 2,
		},
	},
})(TextField)

const SearchBar = ({ searchStr, setSearchStr }) => {
	const handleChange = (event) => {
		setSearchStr(event.target.value)
	}

	return (
		<ColoredTextField
			className='input-search'
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<Search style={{ color: '#adadaa' }} />
					</InputAdornment>
				),
			}}
			value={searchStr}
			variant='outlined'
			onChange={handleChange}
		/>
	)
}
export default SearchBar
