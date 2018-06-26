import {API_URL} from './../constants';

const CategoriesURL = API_URL + '/categories';
const BrandsURL = API_URL + '/brands/';
const FamiliesURL = API_URL + '/families/';
const StoresURL = API_URL + '/products/';

export async function getCategories() {
  try {
    const response = await fetch(CategoriesURL);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
export async function getBrands(category) {
  try {
    const response = await fetch(BrandsURL + category);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getFamilies(brand, category) {
  try {
    const response = await fetch(FamiliesURL + brand + '/'+ category);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default async function getStores(category, brand, family) {
  try {
    const response = await fetch(StoresURL + category + '/' + brand + '/' + family);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}