"use strict"
const log = txt => console.log(txt);
//===========================================================================================================================================================================================================


const fields = {
	total: document.querySelector('.total'),
	listCompanies: document.getElementById('listCompanies'),
	listPartners: document.querySelector('.partnersList')
}

log(fields.total.innerHTML)

log(fields.listCompanies)

fields.listCompanies.addEventListener('click', handleGetListName)
//formatting list of companies
function createNameList(company){
	let markup = [];
	company.list.forEach(item => {
		markup.push(`<option>${item.name}</option>`)
	})
	return markup
}

//create list of partners
// function createPartnersList(company){
// 	let markup = [];
// 	// log(company)
// 	company.list.forEach(item => {
// 		// log(item)
// 		if(item.name === evt.innerHTML){
// 			item.partners.forEach(itemPartners => markup.push(`<div class="partnerListItem"><div class="line"><div class="circleSmall"><h4 class="inner">${itemPartners.value}</h4></div></div><h4>${itemPartners.name}</h4></div>`))
// 		}
// 	})
// 	log(markup)
// 	return markup;
// }

//getting name company from "List of companies"
function handleGetListName(event){
	var evt = event.target
	log(event)
	let markup = [];
	// log(company)
	jsondata.list.forEach(item => {
		// log(item)
		if(item.name === evt.innerHTML){
			item.partners.forEach(itemPartners => markup.push(`<div class="partnerListItem"><div class="line"><div class="circleSmall"><h4 class="inner">${itemPartners.value}</h4></div></div><h4>${itemPartners.name}</h4></div>`))
		}
	})
	fields.listPartners.innerHTML = markup.sort().join('')
}


//input fields from company

function formattedDates(company){
	fields.total.innerText = company.list.length;
	fields.listCompanies.innerHTML = createNameList(company).sort().join('');

	
}


formattedDates(jsondata)







