import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../services/api';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getEmployees(token);
        setEmployees(data);
      } catch (err) {
        console.error('Error fetching employees', err);
      }
    };
    fetchData();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id, token);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      console.error('Error deleting employee', err);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <button onClick={() => navigate('/employees/add')}>Add Employee</button>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            <button onClick={() => navigate(`/employees/update/${employee._id}`)}>Edit</button>
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
