import React from 'react'
import * as moment from 'moment'

import './SideBarItem.scss'

const SideBarItem = ({ data, setSelectedTicket }) => {
	const handleClick = () => {
		setSelectedTicket(data)
	}

	return (
		<div className='sidebar-item' onClick={handleClick}>
			<img src={data.owner.avatar} className='avatar' alt='' />
			<span>{moment(data.reportedTime).format('DD/MM/YY hh:mm')}</span>
			<span>{data.asset.name}</span>
			<div className='btn-status'>
				{data.status === 'assigned' && <span className='label-asd'>ASD</span>}
				{data.status === 'completed' && <span className='label-com'>COM</span>}
				{data.status === 'unassigned' && <span className='label-una'>UNA</span>}
			</div>
		</div>
	)
}

export default SideBarItem
