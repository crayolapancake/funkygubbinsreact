import React, { Component } from 'react';
import Header from './Common/Header';
import SingleProduct from './Common/SingleProduct';
import './App.css';

// url: "https://openapi.etsy.com/v2/shops/" + shop_name + "/listings/active.js?api_key=" + api_key + "&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",

// &includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: null,
      loading: false,
      results: []
    };
  }


  componentDidMount() {
    if (!window.results) {
      // console.log('NO window.results');
      setTimeout(() => {
        this.setState({ loading: !this.state.loading });
      }, 1000);
    } else {
      this.setState({ isLoaded: true, results: window.results });
    }
  }

  componentDidUpdate() {
    const { loading } = this.state;

    if (!window.results) {
      setTimeout(() => {
        this.setState({ loading: !loading }, () => {
        });
      }, 1000);
    } else if (JSON.stringify(this.state.results) !== JSON.stringify(window.results)) {
      console.log("else");
      this.setState({ isLoaded: true, results: window.results },
        // () => {console.log("setting results: ", this.state.results)}
      );
    }
  }

  render() {
    return (
      <div className="app">
        <div className='sticky'>
          <Header />
        </div>
        <div className="product-container">
          {this.state.results.map((item, i) => {
            // console.log("item:", item);
            const shortTitle = item.title.split(' ').slice(0, 4).join(' ');
            return <SingleProduct title={shortTitle} key={i} imageUrl={item.MainImage.url_fullxfull} />;
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
