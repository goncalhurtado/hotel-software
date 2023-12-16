import { axiosInstance } from "../../config/axiosInstance";


export const getAdminContact = async(query = "all") => {
    try {
        const response = await axiosInstance.get(`/admin/contacts/${query}`);
        return response.data.contacts;
    } catch (error) {
        console.log(error);
    }
}


export const setAnswered = async(id, setLoading) => {
    try {
        setLoading(true);
        const response = await axiosInstance.put(`/admin/contacts/answered/${id}`);
        setLoading(false);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

export const setPending = async(id, setLoading) => {
    try {
        setLoading(true);
        const response = await axiosInstance.put(`/admin/contacts/pending/${id}`);
        setLoading(false);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

export const deleteContact = async(id, setLoading) => {
    try {
        setLoading(true);
        const response = await axiosInstance.delete(`/admin/contacts/${id}`);
        setLoading(false);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}