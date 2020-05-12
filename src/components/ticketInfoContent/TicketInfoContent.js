import React from 'react'
import * as moment from 'moment'

import './TicketInfoContent.scss'

const TicketInfoContent = ({ data }) => (
	<>
		<section className='content-header'>
			<div>
				<span>TICKET NO. </span>
				<span className='number'>{data.number}</span>
			</div>
			<div>
				<span>LAST UPDATED </span>
				<span>{moment(data.lastUpdatedTime).format('DD/MM/YY hh:mm')}</span>
			</div>
		</section>
		<section className='card-container'>
			<div className='card-header'>Owner</div>
			<div className='card-content'>
				<div className='owner-info'>
					<img src={data.owner.avatar} alt='' className='avatar' />
					<div className='owner-info-detail'>
						<span>{`${data.owner.firstName} ${data.owner.lastName}`}</span>
						<span className='speciality'>{data.owner.specialities[0]}</span>
					</div>
				</div>
			</div>
		</section>
		<section className='card-container'>
			<div className='card-header'>Details</div>
			<div className='card-content'>
				<span className='label'>Reported</span>
				<span>{moment(data.reportedTime).format('DD/MM/YY hh:mm')}</span>
				<span className='label'>Status</span>
				<div className='btn-status'>
					{data.status === 'assigned' && <span className='label-asd'>ASD</span>}
					{data.status === 'completed' && (
						<span className='label-com'>COM</span>
					)}
					{data.status === 'unassigned' && (
						<span className='label-una'>UNA</span>
					)}
				</div>
				<span className='label'>Description</span>
				<span>{data.description}</span>
			</div>
		</section>
		<section className='card-container'>
			<div className='card-header'>Asset</div>
			<div className='card-content'>
				<span className='label'>Name</span>
				<span>{moment(data.asset.name).format('DD/MM/YY hh:mm')}</span>
				<span className='label'>GeoCode</span>
				<span>{data.asset.geoCode}</span>
				<span className='label'>Location</span>
				<div className='location-group'>
					<div className='btn-location'>{data.asset.kmFrom.toFixed(4)}</div>
					<div className='btn-location'>{data.asset.kmTo.toFixed(4)}</div>
				</div>
			</div>
		</section>
	</>
)

export default TicketInfoContent
