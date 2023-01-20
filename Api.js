function Api(){
    async function getData(){
        const data=await fetch(	"http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json " )
        console.log(data)
    }

    getData()
    return (
        <h1>fnfkhh</h1>
    )
}


export default Api;