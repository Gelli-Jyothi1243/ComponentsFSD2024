function Sum(){
    const a=[10,20,30];
    const lst=a.map((item,index)=><li key={index}>{item}</li>)
    
    return(
        <>
        len=a.length
        <ul>{lst}</ul>
        <h1>{a[0]}</h1>
        <ul>{a.map((item,index)=>(<li key={index}>{item}</li>))}</ul>
        </>
    )
}
export default Sum;