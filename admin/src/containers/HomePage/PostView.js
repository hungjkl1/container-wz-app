import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import Strapi from './utils/Strapi';

function MyChart() {
  const [data, setData] = useState(null)
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  
  useEffect(() => {
    const fetchData = async() => { 
      const { data: result } = await axios.get(`${strapi.backendURL}/newUsersData`)
      let array = []
      result.forEach(element => {
        console.log(element)
        const { count, _id } = element
        array.push({
          label: `${_id.month}/${_id.year}`,
          count
        })
      });
      setData(array)
    }
    fetchData()
  },[])

  if(data) {
    console.log(data.length)
  }

  if(!data) return <div> LOADING CHART.... </div>

  return (
    <div
      style={{
        width: '100%'
      }}
    >
    <div style={{ textAlign:'center', fontSize: '24px', marginBottom: '16px' }}> New users by month</div>

    <ResponsiveContainer width='100%' height={500}>
      <LineChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }} data={data}>
        <Line type="monotone" dataKey="count"  label='users' stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="label" />
        <YAxis dataKey="count"/>
        <Tooltip/>
      </LineChart>

    </ResponsiveContainer>
    </div>
  )
}

export default MyChart