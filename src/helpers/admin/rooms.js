import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";

export const createRoom = async(e, formData, setLoading, setError, getRooms) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await axiosInstance.post(`/room`, formData);
        setError({
            status: false,
            message: response.data.message
        })
        setLoading(false);
        getRooms();

    } catch (error) {

        setError({
            status: true,
            message: error.response.data.message || error.message
        })
        setLoading(false);

    }
}


export const updateRoom = async(e, formData, setLoading, setError, getRooms) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await axiosInstance.put(`/room/${formData.id}`, formData);
        setError({
            status: false,
            message: response.data.message
        })
        setLoading(false);
        getRooms();

    } catch (error) {

        setError({
            status: true,
            message: error.response.data.message || error.message
        })
        setLoading(false);

    }
};




export const deleteRoom = async(row, getRooms) => {


    Swal.fire({
            title: `Do you want to delete room ${row.number} ?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
        })
        .then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosInstance.delete(`/room/${row._id}`);
                    Swal.fire(`${response.data.message}`, ``, "success");
                    getRooms();
                } catch (error) {
                    const errorMessage = error.response.data.message || error.message;
                    Swal.fire(`${errorMessage}`, ``, "error");
                }
            }
        });

}