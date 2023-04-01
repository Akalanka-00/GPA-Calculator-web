import baseUrl from "./baseUrl";


function SaveLogData(action, country, country_code, IPv4, mac_address, latitude, longtitude,user_id){

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' '); // format as ISO string

    const dataset = {
        action:action,
        country:country,
        country_code:country_code,
        IPv4:IPv4,
        mac_address:mac_address,
        latitude:latitude,
        longtitude:longtitude,
        user_id:user_id,
        current_dnt:formattedDate,
    };
    console.log(dataset);
    baseUrl.post("/api/service/logdata", dataset)
    .then((res) => {
        //console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
}

export default SaveLogData;