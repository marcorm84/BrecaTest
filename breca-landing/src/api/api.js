import {API_URL} from './../constants';

export async function getCategories() {
  try {
    const url = `${API_URL}/categories`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
export async function getBrands(category) {
  try {
    const url = `${API_URL}/brands/${category}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getFamilies(brand, category) {
  try {
    const url = `${API_URL}/families/${brand}/${category}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default async function getStores(category, brand, family) {
  try {
    const url = `${API_URL}/products/${category}/${brand}/${family}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}