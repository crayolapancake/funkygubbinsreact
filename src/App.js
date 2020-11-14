import React, { Component } from 'react';
import Header from './Common/Header';
import SingleProduct from './Common/SingleProduct';
import './App.css';

//
// url: "https://openapi.etsy.com/v2/shops/" + shop_name + "/listings/active.js?api_key=" + api_key + "&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",



// &includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: null,
    }

    // fix env, why's it not finding this
    // this.api_key = {REACT_APP_API_KEY};
    this.api_key = '';
    this.shop_name = "funkygubbins";
  }

  componentDidMount() {
    // console.log('api key: ', `${process.env.REACT_APP_API_KEY}`)
    console.log('api key: ', this.api_key)


    const url = "https://openapi.etsy.com/v2/shops/" + this.shop_name + "/listings/active.js?api_key=" + this.api_key

    fetch("https://openapi.etsy.com/v2/shops/" + this.shop_name + "/listings/active?api_key=" + this.api_key, {

    // fetch("https://openapi.etsy.com/v2/listings/active?api_key={" + this.api_key + "}", {


      crossDomain:true,
      method: 'GET',
      dataType:'JSONP',
      headers:{
        'Access-Control-Allow-Origin':'*'
      },
      // body: JSON.stringify({
      //   // username: user,
      //   // password: pass,
      // })
    })


    .then(res => res.json())
    .then(res => {
      console.log("response:", res);
    })
    .then(
      (result) => {
        console.log("result!", result);
        this.setState({
          isLoaded: true,
          // items: result.items
        });
      },
      (error) => {
        console.log("error", error);
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return (
      <div className="app">
        <div className='sticky'>
          <Header />
        </div>
        <div className="product-container">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    );
  }
}

export default App;
