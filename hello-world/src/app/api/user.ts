import axios from 'axios';
 
/**
 * add user call
 * @param userData
 * @returns
 */
export async function adduser(userData: any) {
    try {
      const response = await axios.post('http://localhost:5000/V1.0/doctor/adddoctor', userData,);
      return response.data
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
}
 