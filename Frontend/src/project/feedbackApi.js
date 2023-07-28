import axios from "axios";

const URI='http://localhost:8081'
const getFeedback = () => axios.get(`${URI}/getfed`)
const addFeedback = (Feedback) => axios.post(`${URI}/addfed`,Feedback)

export {getFeedback,addFeedback}