import { axiosInstance } from "../../config/axiosInstance";

export const editRoom = async(e, formData, setLoading, setError, getRooms) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);
    // formData.number = parseInt(formData.number);
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