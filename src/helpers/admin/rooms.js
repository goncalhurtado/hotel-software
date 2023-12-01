import Swal from "sweetalert2";
import { axiosInstance } from "../../config/axiosInstance";

export const editRoom = async(e, formData, setLoading, setError) => {
    e.preventDefault();
    // console.log(formData);
    const data = new FormData();
    data.append("number", formData.number);
    data.append("category", formData.category);
    setLoading(true);

    try {
        const response = await axiosInstance.put(`/roomasdas`, data);
        Swal.fire({
            title: response.data.message,
            icon: "success",
            confirmButtonColor: "#3f50b5",
        });

        // setCreating(false);
        // getCategories();
        // console.log(data);
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: error.response.data.message || error.message,
            icon: "error",
            confirmButtonColor: "#d33",
        });


        setError({
            status: true,
            message: error.response.data.message || error.message
        })

        setLoading(false);
    }
};