import React, { Component } from 'react';
import Header from './Common/Header';
import ProductBlurb from './Components/ProductBlurb';
import './App.styles.css';

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
            const shortTitle = item.title.split(' ').slice(0, 7).join(' ');
            // take 5 words except end if it hits words" neckalce" or 'pendant'? 
            // remove training comma          
            return <ProductBlurb title={shortTitle} key={i} imageUrl={item.MainImage.url_fullxfull} price={item.price} />;
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
