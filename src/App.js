import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {connect, useSelector} from 'react-redux';
import store from './store/store';

function App() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();

  async function repoDataUrl(){
    //mengambil repo dari github
    await fetch("https://api.github.com/users/prasetyoww/repos")
    .then((res) => res.json())
    .then(
    (result) => {
      console.log(36, result);
      const list = result.map((item) => (
        <div className="text-center">
          <a target="_blank" href={item.svn_url}>
            {item.name}
          </a>
        </div>
      ));
      setRepoData(list);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/prasetyoww")
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        setAvatarURL(result.avatar_url);
        setGitHubUsername(result.login);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatarURL} />
      <Card.Body>
        <Card.Title>
        {githubUsername}
        </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick = {repoDataUrl} >List My Public Repos !</Button>
      </Card.Body>
    </Card>
    {repoData}
 </div>
    );
}


export default (App);
