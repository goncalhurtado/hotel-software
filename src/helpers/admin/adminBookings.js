import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";

export const dateFormater = (dateString) => {
    let date = new Date(dateString);
    let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    let formattedTime = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
}

export const editBooking = async(formData, setLoading, _id, setEditing, getBookings) => {

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
        getBookings();
        setEditing({ status: false, data: {} });


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


export const deleteBooking = async(row, getBookings) => {

    Swal.fire({
            title: `Do you want to delete the ${row.bookingId} booking ?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
        })
        .then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosInstance.delete(`/booking/${row._id}`);
                    Swal.fire(`${response.data.message}`, ``, "success");
                    getBookings();
                } catch (error) {
                    const errorMessage = error.response.data.message || error.message;
                    Swal.fire(`${errorMessage}`, ``, "error");
                }
            }
        });

}

export const getBookingsReports = async() => {
    try {
        const response = await axiosInstance.get(`/booking/reports`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}