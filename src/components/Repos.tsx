import { useState, useEffect } from "react";
import api from "../services/api";
import axios from "axios";

type propType = {
  texto: string;
};

export function Repos(props: propType) {
  const [repos, setRepos] = useState<any>([]);
  const [search,setSearch] = useState('')

  async function getReq() {
    try {
      const response = await api.get("");
      getRepo(response.data.repos_url);
    } catch (err) {
      console.log(err);
    }
  }

  async function getRepo(url: string) {
    try {
      const response = await axios.get(url);
      setRepos(response.data);
    } catch (err) {
        console.log(err);
    }
}
    const filterRepos = repos.filter(repo => repo.name.toLocaleLowerCase().includes(props.texto.toLocaleLowerCase()))


  useEffect(() => {
    getReq();
  }, []);

  return (
    <>
      <ul>
        {filterRepos.map((repo) => {
            return <li key={repo.id}>{repo.name}</li>
        })}
      </ul>
    </>
  );
}