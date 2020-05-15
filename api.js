// const processUsers= (contact)=>
// (
//     {
//         name: `${contact.name.first} ${contact.name.last}` ,
//         phone:contact.phone,
//     }
// )

export const fetchTotalStats= async ()=>
{
    const response=await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
    const {data}= await response.json()
    console.log(data)
    return data
}

export const fetchCountryStats = async ()=>
{
    const response= await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?order=total_cases&limit=220')
    const {data}= await response.json()
    return data
}

export const fetchByCountry = async (country)=>
{
    if(country==="United States")
        country="USA"
    const response= await fetch(`https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${country}`)
    const {data}= await response.json()
    const {rows}=data
    return rows[0]
}
