import React, { useMemo } from 'react';
import Table from './Table';

const App = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'Occupation',
        accessor: 'occupation',
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      { name: 'Rahul', age: 28, country: 'India', city: 'Mumbai', occupation: 'Engineer' },
      { name: 'Anjali', age: 22, country: 'India', city: 'Delhi', occupation: 'Doctor' },
      { name: 'Vikram', age: 35, country: 'India', city: 'Bangalore', occupation: 'Artist' },
      { name: 'Priya', age: 30, country: 'India', city: 'Chennai', occupation: 'Teacher' },
      { name: 'Raj', age: 40, country: 'India', city: 'Kolkata', occupation: 'Lawyer' },
      { name: 'Sneha', age: 25, country: 'India', city: 'Pune', occupation: 'Architect' },
      { name: 'Arjun', age: 32, country: 'India', city: 'Hyderabad', occupation: 'Scientist' },
      { name: 'Rina', age: 29, country: 'India', city: 'Ahmedabad', occupation: 'Engineer' },
      { name: 'Karan', age: 34, country: 'India', city: 'Surat', occupation: 'Doctor' },
      { name: 'Tara', age: 27, country: 'India', city: 'Jaipur', occupation: 'Artist' },
      { name: 'Rohit', age: 31, country: 'India', city: 'Lucknow', occupation: 'Teacher' },
      { name: 'Meera', age: 26, country: 'India', city: 'Kanpur', occupation: 'Lawyer' },
      { name: 'Ajay', age: 33, country: 'India', city: 'Nagpur', occupation: 'Architect' },
      { name: 'Shivani', age: 24, country: 'India', city: 'Indore', occupation: 'Scientist' },
      { name: 'Manish', age: 38, country: 'India', city: 'Thane', occupation: 'Engineer' },
    ],
    []
  );

  return (
    <div className='center' style={{height:'100vh'}}>
  <Table columns={columns} data={data} />
  </div>
  )
};

export default App;
