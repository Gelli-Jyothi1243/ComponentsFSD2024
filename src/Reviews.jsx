function Reviews(){
    const res=[
        {
            name:'hi',
            feed:'Good'
        },
        {
            name:'hello',
            feed:'nice'
        }
    ]
    return(
        <>
            <img src="/image.jpg"></img>
            <ul>{res.map((item,index)=>(<li key={index}>{item.name}<br></br>{item.feed}</li>))}</ul>
        </>
    );
}
export default Reviews;