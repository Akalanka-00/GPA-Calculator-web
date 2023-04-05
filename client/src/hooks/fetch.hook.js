import { useEffect, useState } from "react";
import baseUrl from "../Apis/baseUrl";
import { getUsername } from "../Helper/helper";


/** custom hook */
export default function useFetch(query){
    const [getData, setData] = useState({ isLoading : false, apiData: undefined, status: null, serverError: null })

    console.log(query)
    useEffect(() => {

        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true}));

                //const { username } = !query ? await getUsername() : '';
                
               // const { data, status } = !query ? await baseUrl.get(`/user/${username}`) : await baseUrl.get(`/${query}`);
               const { data, status } =  await baseUrl.get(`/user/${query}`);

                if(status === 201){
                    setData(prev => ({ ...prev, isLoading: false}));
                    setData(prev => ({ ...prev, apiData : data, status: status }));
                }

                setData(prev => ({ ...prev, isLoading: false}));
            } catch (error) {
                console.log(error);
                setData(prev => ({ ...prev, isLoading: false, serverError: error }))
            }
        };
        fetchData()

    }, [query]);

    return [getData, setData];
}