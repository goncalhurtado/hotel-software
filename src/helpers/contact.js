import { axiosInstance } from "../../src/config/axiosInstance";
import Swal from "sweetalert2";


export const postContact = async(formData, setLoading) => {

    setLoading(true)
    try {
        const response = await axiosInstance.post("/contact", formData);
        console.log(response);
        setLoading(false);
        Swal.fire({
            title: "Success",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "Ok",
        });

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