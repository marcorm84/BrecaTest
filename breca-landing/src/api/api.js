import {API_URL} from './../constants';

const CategoriesURL = API_URL + '/categories';
const BrandsURL = API_URL + '/brands/';
const FamiliesURL = API_URL + '/families/';
const StoresURL = API_URL + '/products/';

export async function getCategories() {
  try {
    let response = await fetch(CategoriesURL);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
export async function getBrands(category) {
  try {
    let response = await fetch(BrandsURL + category);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getFamilies(brand, category) {
  try {
    let response = await fetch(FamiliesURL + brand + '/'+ category);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default async function getStores(category, brand, family) {
  try {
    let response = await fetch(StoresURL + category + '/' + brand + '/' + family);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}