import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getStores from './api/api';
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const stores = [
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 1",
   description: "lalala"
  },
  {
   name: "tienda 2",
   description: "lalala"
  },
  {
   name: "tienda 3",
   description: "lalala"
  },
  {
   name: "tienda 4",
   description: "lalala"
  }
];

class App extends Component {
  state = {
      data: []
  };

  getData = (e) => {
    getStores(e.category, e.brand, e.family).then(x => this.setState({
      data: x.data 
    }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form getData={this.getData} />
          <Table
            data={this.state.data}
            header={[
              {
                name: "Id",
                prop: "ID_ITEM"
              },
              {
                name: "Nombre",
                prop: "DE_ITEM"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
