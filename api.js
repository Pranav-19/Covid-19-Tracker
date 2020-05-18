
export const fetchTotalStats= async ()=>
{
    const response=await fetch('https://corona.lmao.ninja/v2/all?yesterday')
    const data= await response.json()
    return data
}

export const fetchCountryStats = async ()=>
{
    const response= await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort=cases')
    // console.log("response:"+response);
    const data= await response.json()
    // console.log("data: "+data);
    return data
}

export const fetchByCountry = async (country)=>
{
    if(country==="United States")
        country="USA"
    else if(country==="United Kingdom")
        country="UK"
    else if(country==="United Arab Emirates")
        country="UAE"
    else if(country==="Myanmar (Burma)")
        country="Myanmar"
    const response= await fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict=true&query`)
    const data= await response.json()

    if("message" in data)
        return{ 
            cases:"NA",
            deaths:"NA",
            recovered:"NA",
            active:"NA"
        }
    else
        return data

}
