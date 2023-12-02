import { axiosInstance } from "../config/axiosInstance"


export const searchAvailableRooms = async(queryString, setLoading, setAvailables) => {

    setLoading(true);



    try {


        const response = await axiosInstance.get(`/bookings/${queryString}`);

        setLoading(false);



        setAvailables({
            categories: response.data.categories,
            rooms: response.data.availablesRooms
        })

    } catch (error) {
        console.log(error);
        setLoading(false);
    }

    // try {
    //     // ruta-del-controlador?check_in=2022-12-01&check_out=2022-12-10&capacity=2
    //     const response = await axiosInstance.get(`/rooms/search?check_in=${formData.checkIn}&check_out=${formData.checkOut}&capacity=${formData.capacity}`);
    //     setRooms(response.data);
    //     setLoading(false);

    // } catch (error) {

    //     console.log(error);
    //     // setError({
    //     //     status: true,
    //     //     message: error.response.data.message || error.message
    //     // })
    //     setLoading(false);

    // }




}