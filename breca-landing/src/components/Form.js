import React from "react";
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from "material-ui/RaisedButton";
import isNullOrWhiteSpace from "./../utils";
import {getCategories, getBrands, getFamilies} from './../api/api';

export default class Form extends React.Component {
  state = {
      category: "",
      brand: "",
      family: "",
      categories: [],
      brands: [],
      families: []
  };

  onSubmit = e => {
    e.preventDefault();
    if (isNullOrWhiteSpace(this.state.category) || isNullOrWhiteSpace(this.state.brand) || isNullOrWhiteSpace(this.state.family))
      return false;
    this.props.getData({
      category: this.state.category,
      brand: this.state.brand,
      family: this.state.family
    });
  };
  componentDidMount() {
    getCategories().then(e => this.setState({categories: e.data }));
  };
  changeCategory(e) {
    this.setState({category: e});
    if (!isNullOrWhiteSpace(e)) {
      getBrands(e).then(e => this.setState({
        brands: e.data,
        brand: "",
        family: ""
      }));   
    };
  };
  changeBrand(e) {
    this.setState({brand: e});
    if (!isNullOrWhiteSpace(e)) {
      getFamilies(e, this.state.category).then(e => this.setState({
        families: e.data,
        family: ""
      }));    
    };
  };
  render() {
    return (
      <form>
        <AutoComplete
          name="category"
          floatingLabelText="Categoría"
          onUpdateInput={e => this.changeCategory(e)}
          searchText={this.state.category}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.state.categories}
        />
        <AutoComplete
          name="brand"
          floatingLabelText="Marca"
          onUpdateInput={e => this.changeBrand(e)}
          searchText={this.state.brand}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.state.brands}
        />
        <AutoComplete
          name="family"
          floatingLabelText="Familia"
          onUpdateInput={e => this.setState({family: e})}
          searchText={this.state.family}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.state.families}
        />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  };
};