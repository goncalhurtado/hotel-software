import { axiosInstance } from "../../config/axiosInstance";


export const getAdminContact = async(query = "all") => {
    try {
        const response = await axiosInstance.get(`/admin/contacts/${query}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}