import Swal from "sweetalert2";
import { axiosInstance } from "../../config/axiosInstance";

export const editRoom = async(e, formData, setLoading) => {
    e.preventDefault();
    const data = new FormData();
    data.append("number", formData.name);
    data.append("category", formData.description);
    setLoading(true);

    try {
        const response = await axiosInstance.put(`/room`, data);
        Swal.fire({
            title: response.data.message,
            icon: "success",
            confirmButtonColor: "#3f50b5",
        });

        setCreating(false);
        getCategories();
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: error.response.data.message || error.message,
            icon: "error",
            confirmButtonColor: "#d33",
        });
        setLoading(false);
    }
};