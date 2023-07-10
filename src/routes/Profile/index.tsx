import Header from "../../components/Header"
import { UserProps } from "../../types/user";
import { RepoProps } from "../../types/repo"
import { useState, useEffect } from "react";
import { StarredProps } from "../../types/starred";
import { Tab, TabList, TabPanels, Tabs, TabPanel, TabIndicator } from "@chakra-ui/react"
import { Container } from "./styles";
import { BiBookBookmark } from 'react-icons/bi'
import { TiStarOutline } from 'react-icons/ti'
import { TbGitFork } from 'react-icons/tb'
import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { Button } from "../../components/Button/Button";
import { Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup } from '@chakra-ui/react'

const Profile = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repo, setRepo] = useState<RepoProps[]>([]);
  const [starred, setStarred] = useState<StarredProps[]>([]);

  const loadUser = async () => {
    const userName = localStorage.getItem("userName")

    const response = await fetch(`https://api.github.com/users/${userName}`)
    console.log(response.body)
    const data = await response.json();

    const { avatar_url, name, bio, company, location, login ,blog, email} = data;

    const userData: UserProps = {
      avatar_url,
      name,
      bio,
      company,
      location,
      login,
      blog,
      email,
    };

    setUser(userData);
  }

  const loadRepo = async () => {
    const userName = localStorage.getItem("userName")

    const response = await fetch(`https://api.github.com/users/${userName}/repos`)
    const data = await response.json();

    const repoData = data?.map((repo:any) => ({
        description: repo.description,
        html_url: repo.html_url,
        name: repo.name,
        language: repo.language,
        visibility: repo.visibility,
    }));

    setRepo(repoData);
  }

  const loadStarred = async () => {
    const userName = localStorage.getItem("userName")

    const response = await fetch(`https://api.github.com/users/${userName}/starred`)
    const data = await response.json();

    const starredData = data?.map((repo:any) => ({
        description: repo.description,
        html_url: repo.html_url,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks: repo.forks,
    }));

    setStarred(starredData);
  }


  useEffect(() => {
    loadUser();
    loadRepo();
    loadStarred();
  }, []);

  return (
    <>
      <Header/>
      <Container>
        <div className="user">
          <img className="photo" src={user?.avatar_url} />
          <h5 className="userName">{user?.name}</h5>
          <p className="userBio">{user?.bio}</p>
          <ul>
            <li className="userDescription">{user?.company}</li>
            <li className="userDescription">{user?.location}</li>
            <li className="userDescription">{user?.blog}</li>
            <li className="userDescription">{user?.email}</li>
          </ul>
        </div>
        
        <div className="tabs">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab><BiBookBookmark/>Repositories</Tab>
              <Tab><TiStarOutline/>Starred</Tab>
            </TabList>
            <TabIndicator
               mt="-1.5px"
               height="2px"
               bg="#FD8C73"
               borderRadius="1px"
            />
            <TabPanels>
              <TabPanel maxW="800px">

              <div className="inputSearch">
                    <div className="input">
                      <Stack spacing={4}>
                      <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                      <FiSearch color='gray.300' size={25} />
                      </InputLeftElement >
                      <Input variant='flushed'type='serach' placeholder='Search Here' size='lg' />
                      </InputGroup>
                      </Stack>
                    </div>

                  <div className="filter">
                      <Menu closeOnSelect={false}>
                      <MenuButton as={Button}>
                      Type
                      </MenuButton>
                      <MenuList minWidth='240px'>
                      <MenuOptionGroup type='checkbox'>
                      <MenuItemOption value='all'>All</MenuItemOption>
                      <MenuItemOption value='Sources'>Sources</MenuItemOption>
                      <MenuItemOption value='Forks'>Forks</MenuItemOption>
                      <MenuItemOption value='Archived'>Archived</MenuItemOption>
                      <MenuItemOption value='Mirrors'>Mirrors</MenuItemOption>
                      </MenuOptionGroup>
                      </MenuList>
                      </Menu>
                 
                      <Menu closeOnSelect={false}>
                      <MenuButton as={Button}>
                      Language
                      </MenuButton>
                      <MenuList minWidth='240px'>
                      <MenuOptionGroup type='checkbox'>
                      <MenuItemOption value='All'>All</MenuItemOption>
                      <MenuItemOption value='Java'>Java</MenuItemOption>
                      <MenuItemOption value='Typescript'>Typescript</MenuItemOption>
                      <MenuItemOption value='HTML'>HTML</MenuItemOption>
                      <MenuItemOption value='CSS'>CSS</MenuItemOption>
                      </MenuOptionGroup>
                      </MenuList>
                      </Menu>
                  </div>
                </div>

                {repo && repo?.map((repository) => (
                  <div>
                    <ul className="repoList">
                      <li className="repoName">{repository.name} / <span className="public">{repository.visibility}</span></li>
                      <li className="repoDescript">{repository.description}</li>
                      <li className="repoLang">{repository.language}</li>
                    </ul>
                    <hr/>
                  </div>
                ))}
                </TabPanel>
               <TabPanel maxW="800px">

               <div className="inputSearch">
                    <div className="input">
                      <Stack spacing={4}>
                      <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                      <FiSearch color='gray.300' size={25} />
                      </InputLeftElement >
                      <Input variant='flushed'type='serach' placeholder='Search Here' size='lg' />
                      </InputGroup>
                      </Stack>
                    </div>

                  <div className="filter">
                      <Menu closeOnSelect={false}>
                      <MenuButton as={Button}>
                       Type
                      </MenuButton>
                      <MenuList minWidth='240px'>
                      <MenuOptionGroup type='checkbox'>
                      <MenuItemOption value='all'>All</MenuItemOption>
                      <MenuItemOption value='Sources'>Sources</MenuItemOption>
                      <MenuItemOption value='Forks'>Forks</MenuItemOption>
                      <MenuItemOption value='Archived'>Archived</MenuItemOption>
                      <MenuItemOption value='Mirrors'>Mirrors</MenuItemOption>
                      </MenuOptionGroup>
                      </MenuList>
                      </Menu>
                 
                      <Menu closeOnSelect={false}>
                      <MenuButton as={Button}>
                      Language
                      </MenuButton>
                      <MenuList minWidth='240px'>
                      <MenuOptionGroup type='checkbox'>
                      <MenuItemOption value='All'>All</MenuItemOption>
                      <MenuItemOption value='Java'>Java</MenuItemOption>
                      <MenuItemOption value='Typescript'>Typescript</MenuItemOption>
                      <MenuItemOption value='HTML'>HTML</MenuItemOption>
                      <MenuItemOption value='CSS'>CSS</MenuItemOption>
                      </MenuOptionGroup>
                      </MenuList>
                      </Menu>
                  </div>
                </div>

                {starred && starred?.map((star) => (
                 <div>
                    <ul>
                      <li className="repoName">{star.full_name}</li>
                      <li className="repoDescript">{star.description}</li>
                      <li className="repoLang">{star.language}<span className="icons"><TiStarOutline/></span>{star.stargazers_count}<span className="icons"><TbGitFork/></span>{star.forks}</li>
                      </ul>
                      <hr/>
                  </div>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </Container>
    </>
  )
}

export default Profile
