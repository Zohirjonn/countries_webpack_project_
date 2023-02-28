
import loaderToggle from "./loader"

const request = async (resource) => {
    //loader on
    loaderToggle(true)
    //
    const req = await fetch(resource)
    //loader off
    if(!req.ok){
        loaderToggle(false)
        throw new Error ("Something went wrong...")
    }
    //
    const data =await req.json()
    //loader off
    loaderToggle(false)
    //
    return data
}

export default request