import axiosClient from '../axios/config'

export const getInsuranceDetails = async (id) => {
  const res = await axiosClient.get(`/insurance/${id}`)
  return res.data
}
