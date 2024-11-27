import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateEmployee, getEmployees } from '../services/api';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    position: '',
    salary: '',
  });
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getEmployees(token);
        const employee = data.find((emp) => emp._id === id);
        setFormData(employee);
      } catch (err) {
        console.error('Error fetching employee', err);
      }
    };
    fetchData();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, formData, token);
      navigate('/employees');
    } catch (err) {
      console.error('Error updating employee', err);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
