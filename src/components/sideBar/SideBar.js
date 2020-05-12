import React from 'react'

import SideBarItem from './sideBarItem/SideBarItem'

import './SideBar.scss'

const Sidebar = ({ data, setSelectedTicket }) => (
	<div className='sidebar-container'>
		<div className='sidebar-header'>
			<span>OWNER</span>
			<span>REPORTED</span>
			<span>ASSET</span>
			<span>STATUS</span>
		</div>
		{data.map((item) => (
			<SideBarItem
				key={item.ticketId}
				data={item}
				setSelectedTicket={setSelectedTicket}
			/>
		))}
	</div>
)

export default Sidebar
