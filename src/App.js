import React, {useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/searchBar/SearchBar'


function App() {
  
  const [moviesInfo,setMoviesInfo]=useState(
    [
      {title:'The pit', 
      description:`In the pit, you will watch how Yamac reluctantly joins the Mafia and becomes involved in the inevitable cycle of violence and betrayal.`,
       posterURL:'/Posters/pit.jpg', 
       Rating:7.5},
       {title:'Raven',
     description:`Kuzgun tv series story tells how the forces of love and revenge bring two young persons together after 20 years.`,
      posterURL:'/Posters/raven.jpg',
       Rating:8},
      {title:'Champion',
       description:`A true love and success story from the 1990s Turkey, revolving around a jockey, a horse and the daughter of the horse's owner.`,
       posterURL:'/Posters/champion.jpg',
       Rating:8},
      {title:'The gift',
       description:'The Gift is a mysterious journey into ancient secrets and modern efforts to unearth the unknown.',
       posterURL:'/Posters/theGift.jpg',
       Rating:7.5},
      {title:'The protector',
       description:'Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.',
       posterURL:'/Posters/theProtector.jpg',
       Rating:6.5},
      {title:'Insider',
       description:`In insider, you will explore a kind of cat-and-mouse game: two young police officers who work for different organizations and do not disclose their true identity. `,
       posterURL:'/Posters/insider.jpg',
       Rating:8},
      {title:'Love 101',
       description:`Love 101 tv series story is about a group of teenage high school students who try to make their school teacher fall in love so that she will not leave their school. `,
       posterURL:'/Posters/love101.jpg',
       Rating:7.5},
      {title:'The Trusted',
       description:`The trusted story is about a retired soldier who works as a bodyguard and tries to find real culprits responsible for an armed attack at the concert hall`,
       posterURL:'/Posters/marasli.jpg',
        Rating:8},
      {title:'Love for rent',
       description:`Defne who is in dire need of money because of her brother’s debt is hired by Omar’s aunt to make him fall in love and marry him.`,
       posterURL:'/Posters/loveForRent.jpg',
       Rating:7.5},
      {title:'Tide',
       description:`Yaman, a boy from a poor family, gets arrested by the police but then he meets a lawyer Selim who helps him get a chance for a brand new start`,
       posterURL:'/Posters/tide.jpg',
       Rating:7},
      {title:'Last Summer',
       description:`Last summer story is about a reckless and fearless young guy Akgun who comes to Izmir together with his custodian.`,
       posterURL:'/Posters/lastSummer.jpg',
       Rating:6},
      
      {title:'The judgement',
       description:`Judgement story is about a murder case which brings a fearless lawyer Ceylin and rule-based prosecutor together.`,
       posterURL:'/Posters/yargi.jpg',
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
      <MovieList  moviesInfo={moviesInfo} rate={rate} searchInput={searchInput}/>
      
    </div>
  );
}

export default App;
