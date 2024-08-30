import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const[activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
  
      setActivities(response.data);
    }
  )}, []);
  return (
    <div>
      <Header as='h2' content='Reactivities' icon='users'/>
      <List.Item>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </List.Item>
    </div>
     
  
     
  )
}

export default App
