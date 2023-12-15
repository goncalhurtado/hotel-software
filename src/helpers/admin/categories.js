import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";



export const createCategory = async(formData, getCategories, setLoading, setCreating, newImg) => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("capacity", formData.capacity);
    data.append("price", formData.price);
    data.append("image", newImg[0]);
    setLoading(true);

    try {
        const response = await axiosInstance.post(`/category`, data, {
            headers: {
                // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "multipart/form-data",

            }
        });

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
}


export const updateCategory = async(formData, getCategories, setLoading, setEditing, newImg) => {

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("capacity", formData.capacity);
    data.append("price", formData.price);
    data.append("image", newImg[0]);
    setLoading(true);
    try {
        const response = await axiosInstance.put(`/category/${formData._id}`, data);
        Swal.fire({
            title: response.data.message,
            icon: "success",
            confirmButtonColor: "#3f50b5",
        });
        setEditing(false);
        getCategories();
    } catch (error) {
        Swal.fire({
            title: error.response.data.message || error.message,
            icon: "error",
            confirmButtonColor: "#d33",
        });
        setLoading(false);
    }
}




export const deleteCategory = (row, getCategories) => {

    Swal.fire({
        title: `Do you want to delete ${row.name} category?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
    }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                const response = await axiosInstance.delete(`/category/${row._id}`);
                Swal.fire(`${response.data.message}`, ``, "success");
                getCategories();
            } catch (error) {
                const errorMessage = error.response.data.message || error.message;
                Swal.fire(`${errorMessage}`, ``, "error");
            }
        }
    });
}