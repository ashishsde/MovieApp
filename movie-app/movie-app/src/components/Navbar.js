
import React from 'react';
import { StoreContext } from '..';
import { handleMovieSearch } from '../actions';
import './Navbar.css';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state={
            //showSearchResults:true,
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
        //const {showSearchResults}=this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button className="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
      );

    }
}

class NavbarWrapper extends React.Component{
    render(){
        return(
            <StoreContext.Consumer>
                {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
            </StoreContext.Consumer>
        );
    }
}
export default NavbarWrapper;
