export const Navbar=()=>{
    const nav=[{title:"Home",to:"/"},{title:"About",to:"/about"}]
    return(
        <div>
           {nav.map((e)=>{
            return (
                <a href={e.to}>{e.title}</a>
            )
           })}
        </div>
    ) 
}