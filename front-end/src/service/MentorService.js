import axios from "axios";

const MENTOR_API_BASE_URL = "http:///localhost:8080/api/v1/mentors/";

class MentorService{  
    getMentors(){
        return axios.get(MENTOR_API_BASE_URL);
    }
    createMentor(mentor){
        return axios.post(MENTOR_API_BASE_URL , mentor);
    }
    getMentorById(mentorId){
        return axios.get(MENTOR_API_BASE_URL +mentorId);
    }
    updateMentor(mentor, mentorId){
        return axios.put(MENTOR_API_BASE_URL + mentor);
    }
    deleteMentor(Id){
        return axios.delete(MENTOR_API_BASE_URL + Id);
    }
}

export default new MentorService()