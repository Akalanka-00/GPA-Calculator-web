import baseUrl from "./baseUrl";


function SaveLogData(action, country, country_code, IPv4, mac_address, latitude, longtitude,user_id){

    const current_dnt = new Date();
    const dataset = {
        action:action,
        country:country,
        country_code:country_code,
        IPv4:IPv4,
        mac_address:mac_address,
        latitude:latitude,
        longtitude:longtitude,
        user_id:user_id,
        current_dnt:current_dnt,
    };
    baseUrl.post("/api/service/logdata", dataset)
    .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
}

export default SaveLogData;