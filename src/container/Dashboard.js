import React, { useState, useEffect } from 'react'
import { Close } from '@material-ui/icons'

import SearchBar from '../components/searchBar/SearchBar'
import SideBar from '../components/sideBar/SideBar'
import TicketInfoContent from '../components/ticketInfoContent/TicketInfoContent'

import data from '../assets/json/tickets.json'
import './Dashboard.scss'

const Dashboard = () => {
	const [searchStr, setSearchStr] = useState('')
	const [selectedTicket, setSelectedTicket] = useState(null)
	const [filteredData, setFilteredData] = useState(data)

	useEffect(() => {
		if (searchStr === '') {
			return setFilteredData(data)
		}

		const filteredData = data.filter((item) => {
			const searchableStr = JSON.stringify(item)
			if (searchableStr.includes(searchStr)) {
				return true
			}
			return false
		})
		setFilteredData(filteredData)
	}, [searchStr])

	return (
		<div className='container'>
			<header className='header'>
				<h1>Tickets</h1>
			</header>
			<div className='body'>
				<section className='sidebar'>
					<SearchBar searchStr={searchStr} setSearchStr={setSearchStr} />
					<SideBar data={filteredData} setSelectedTicket={setSelectedTicket} />
				</section>
				<section className='content'>
					{selectedTicket ? (
						<TicketInfoContent data={selectedTicket} />
					) : (
						<div className='no-ticket'>
							<Close />
							<span>No ticket selected</span>
						</div>
					)}
				</section>
			</div>
		</div>
	)
}

export default Dashboard
