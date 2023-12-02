import { fi } from "date-fns/locale";
import { axiosInstance } from "../config/axiosInstance"
import Swal from "sweetalert2";


export const postBooking = async(formData, setLoading) => {

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

    } catch (error) {
        setLoading(false);
        console.log(error.response);
        Swal.fire({
            title: "Error",
            text: error.response.data.message || error.message,
            icon: "error",
            confirmButtonText: "Ok",
        });
        // return error.response.data.message || error.message;

    }

}