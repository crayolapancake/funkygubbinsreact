import React, { Component } from 'react';
import './App.css';

//
// url: "https://openapi.etsy.com/v2/shops/" + shop_name + "/listings/active.js?api_key=" + api_key + "&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",
//
// url: "https://openapi.etsy.com/v2/shops/funkygubbins/listings/active.js?api_key=0pr9kg4e7tu8vqpr3uzbx3jm"
//
// &includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",







class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: null,
    }

    this.api_key = apiKey;
    this.shop_name = "funkygubbins";
  }

  componentDidMount() {
    const url = "https://openapi.etsy.com/v2/shops/" + this.shop_name + "/listings/active.js?api_key=" + this.api_key

    console.log("I have arrived!")

    fetch("https://openapi.etsy.com/v2/shops/" + this.shop_name + "/listings/active.js?api_key=" + this.api_key, {
      crossDomain:true,
      method: 'GET',
      // dataType:'jsonp',
      headers:{
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify({
        // username: user,
        // password: pass,
      })
    })


    .then(res => res.json())
    .then(res => {
      console.log("response:", res);
    })
    .then(
      (result) => {
        console.log("result!");
        this.setState({
          isLoaded: true,
          // items: result.items
        });
      },
      (error) => {
        console.log("error");
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1> Funky Gubbins </h1>
      </header>
      <div className="Shop-view">
      </div>
      </div>
    );
  }
}

export default App;
