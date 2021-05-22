
import React from 'react';
import { connect } from 'react-redux';
import { handleMovieSearch ,addMovieToList} from '../actions';
import './Navbar.css';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state={

            searchText:''
        };
    }


    // handleSearch=()=>{
    //     const {searchText}=this.state;
    //     var movie=searchText;
    //     const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    //       fetch(url)
    //         .then(response=>response.json())
    //         .then(movie=>{
    //             console.log("movie",movie);
    //         })
    //         this.props.dispatch(addMovieSearchResult(movie));
        
    // }
    handleAddMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
    }

     handleSearch=()=>{
        const {searchText}=this.state;

        this.props.dispatch(handleMovieSearch(searchText));
      //  this.props.dispatch(handleMovieSearch(searchText));
    };    
    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        });
    };
    render(){
        const {showSearchResults, result}=this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button className="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults &&(
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic"/>
                                <div className="movie-info">
                                    <span className="title">{result.Title}</span>
                                    <button onClick={()=>this.handleAddMovies(result)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
      );

    }
}

// class NavbarWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
//             </StoreContext.Consumer>
//         );
//     }
// }

/*We are Using connect function instead of the context */

function mapStateToProps(state){
    return{
        search:state.search
    }
}

const NavbarConnectedComponent=connect(mapStateToProps)(Navbar);
export default NavbarConnectedComponent;
