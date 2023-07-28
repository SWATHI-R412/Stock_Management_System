import axios from "axios";

const Url = "http://localhost:8080/";

class EmployeeService {

  saveEmployee(employee)
  {
      return axios.post(Url + "addEmp",employee);
  }
    getEmployees()
    {
        return axios.get(Url + "getEmp");
    }
    deleteById(emp_id)
    {
        return axios.delete(Url + "delEmp/" + emp_id);
    }
  
    getEmployeeById(emp_id) 
    {
      return axios.get(Url + "getEmp/" + emp_id);
    }
    updateEmployee(employee, emp_id) 
    {
      return axios.put(Url + "putEmp/" + emp_id, employee);
    }
}

export default new EmployeeService();