import { axiosInstance } from "../../config/axiosInstance";


export const getAdminContact = async(query = "all") => {
    try {
        const response = await axiosInstance.get(`/admin/contacts/${query}`);
        return response.data.contacts;
    } catch (error) {
        console.log(error);
    }
}

export const getContactsReport = async() => {
    try {
        const response = await axiosInstance.get(`/admin/contacts/pending/reports`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const setAnswered = async(row, setLoading, getContact) => {
    try {
        setLoading(true);
        const response = await axiosInstance.put(`/admin/contacts/answered/${row._id}`);
        setLoading(false);
        getContact(row.status);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

export const setPending = async(row, setLoading, getContact) => {
    try {
        setLoading(true);
        const response = await axiosInstance.put(`/admin/contacts/pending/${row._id}`);
        setLoading(false);
        getContact(row.status);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

export const deleteContact = async(row, setLoading, getContact) => {
    try {
        setLoading(true);
        const response = await axiosInstance.delete(`/admin/contacts/${row._id}`);
        setLoading(false);
        getContact(row.status);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}