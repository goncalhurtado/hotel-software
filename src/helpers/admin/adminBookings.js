import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";

export const dateFormater = (dateString) => {
    let date = new Date(dateString);
    let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    let formattedTime = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
}

export const editBooking = async(formData, setLoading, setError, _id) => {

    console.log(formData);
    setLoading(true)
    try {
        const response = await axiosInstance.put(`/booking/${_id}`, formData);
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
        Swal.fire({
            title: "Error",
            text: error.response.data.message || error.message,
            icon: "error",
            confirmButtonText: "Ok",
        });
    }
}