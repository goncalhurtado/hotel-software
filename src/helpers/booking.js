import { axiosInstance } from "../config/axiosInstance"
import Swal from "sweetalert2";


export const postBooking = async(formData, setLoading, setSuccessInfo) => {

    setLoading(true)
    try {
        const response = await axiosInstance.post(`/booking`, formData);
        setLoading(false);
        Swal.fire({
            title: "Success",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "Ok",
        });
        console.log(response);
        const { savedBooking } = response.data;
        setSuccessInfo({
            status: true,
            bookingId: savedBooking.bookingId,
            firstName: savedBooking.info.firstName,
            email: savedBooking.info.email,
        });
        console.log(response);

    } catch (error) {
        setLoading(false);
        console.log(error.response);
        Swal.fire({
            title: "Error",
            text: error.response.data.message || error.message,
            icon: "error",
            confirmButtonText: "Ok",
        });


    }

}

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

}