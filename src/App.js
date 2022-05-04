import React, {useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/searchBar/SearchBar';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import {Routes,Route}  from "react-router-dom";


function App() {
  
  const [moviesInfo,setMoviesInfo]=useState(
    [
      {title:'The pit',
      id:Math.random(),
      description:`In the pit, you will watch how Yamac reluctantly joins the Mafia and becomes involved in the inevitable cycle of violence and betrayal.`,
       posterURL:'/Posters/pit.jpg', 
       trailer:'https://www.youtube.com/embed/JcT_w41lepk',
       Rating:7.5},
       {title:'Raven',
       id:Math.random(),
       description:`Kuzgun tv series story tells how the forces of love and revenge bring two young persons together after 20 years.`,
       posterURL:'/Posters/raven.jpg',
       trailer:"https://www.youtube.com/embed/klYxV32s6B4",
       Rating:8},
      {title:'Champion',
      id:Math.random(),
       description:`A true love and success story from the 1990s Turkey, revolving around a jockey, a horse and the daughter of the horse's owner.`,
       posterURL:'/Posters/champion.jpg',
       trailer:"https://www.youtube.com/embed/LUijbAlDfQU",
       Rating:8},
      
       {title:'The gift',
      id:Math.random(),
       description:'The Gift is a mysterious journey into ancient secrets and modern efforts to unearth the unknown.',
       posterURL:'/Posters/theGift.jpg',
       trailer:"https://www.youtube.com/embed/qXE7MkPXicM",
       Rating:7.5},
      
       {title:'The protector',
      id:Math.random(),
       description:'Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.',
       posterURL:'/Posters/theProtector.jpg',
       trailer:"https://www.youtube.com/embed/tHC9ml-TOXg",
       Rating:6.5},
      
       {title:'Insider',
      id:Math.random(),
       description:`In insider, you will explore a kind of cat-and-mouse game: two young police officers who work for different organizations and do not disclose their true identity. `,
       posterURL:'/Posters/insider.jpg',
       trailer:"https://www.youtube.com/embed/g-GLHdiTkt8",
       Rating:8},
      
       {title:'Love 101',
      id:Math.random(),
       description:`Love 101 tv series story is about a group of teenage high school students who try to make their school teacher fall in love so that she will not leave their school. `,
       posterURL:'/Posters/love101.jpg',
       trailer:"https://www.youtube.com/embed/_oN7X_Bqojw",
       Rating:7.5},
      
       {title:'The Trusted',
      id:Math.random(),
       description:`The trusted story is about a retired soldier who works as a bodyguard and tries to find real culprits responsible for an armed attack at the concert hall`,
       posterURL:'/Posters/marasli.jpg',
       trailer:"https://www.youtube.com/embed/cYwysopxuw8",
        Rating:8},
      
        {title:'Love for rent',
      id:Math.random(),
       description:`Defne who is in dire need of money because of her brother’s debt is hired by Omar’s aunt to make him fall in love and marry him.`,
       posterURL:'/Posters/loveForRent.jpg',
       trailer:"https://www.youtube.com/embed/yLCkjliKY_s",
       Rating:7.5},
      
       {title:'Tide',
      id:Math.random(),
       description:`Yaman, a boy from a poor family, gets arrested by the police but then he meets a lawyer Selim who helps him get a chance for a brand new start`,
       posterURL:'/Posters/tide.jpg',
       trailer:"https://www.youtube.com/embed/rjO0vKQ7pAk",
       Rating:7},
      
       {title:'Last Summer',
      id:Math.random(),
       description:`Last summer story is about a reckless and fearless young guy Akgun who comes to Izmir together with his custodian.`,
       posterURL:'/Posters/lastSummer.jpg',
       trailer:"https://www.youtube.com/embed/64HMedcA4u4",
       Rating:6},
      
      {title:'The judgement',
      id:Math.random(),
       description:`Judgement story is about a murder case which brings a fearless lawyer Ceylin and rule-based prosecutor together.`,
       posterURL:'/Posters/yargi.jpg',
       trailer:"https://www.youtube.com/embed/v0XDT2XXF14" ,
       Rating:8.5},
    ]
  )
  
  const [searchInput,setSearchInput]=useState('');
  const [rate,setRate]=useState(1);
  const [show, setShow] = useState(false);
  const [newMovie,setNewMovie]=useState({
    title:'',
    description:'',
    posterURL:'',
    Rating:1,
    id:'',
    trailerURL:'',
  })

  const handleShow=()=>{
    setShow(true);
  };
  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  };
  const handleSubmit=()=>{
    setMoviesInfo([...moviesInfo,newMovie])
    setShow(false);
  };

  return (
    <div className='App'>
      
      <SearchBar rate={rate} setRate={setRate} setSearchInput={setSearchInput} handleShow={handleShow}/>
      {show ? <AddMovie show={show} setShow={setShow} handleChange={handleChange} handleSubmit={handleSubmit} /> : null}
      <Routes>
        <Route path='/'  element={<MovieList  moviesInfo={moviesInfo} rate={rate} searchInput={searchInput}/> }  />
        <Route path='/moviedetails/:id' element={< MovieDetails moviesInfo={moviesInfo}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
