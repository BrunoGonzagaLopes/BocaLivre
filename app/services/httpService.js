import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";

const BASE_URL = "http://52.67.58.153:8080/api";

export async function get(endpoint) {
  let token = await AsyncStorage.getItem("token");
  return  await fetch(`${BASE_URL}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${token}`,
    },
  }).then(res => {
    if (res.status === 401) {
      router.push("/view/LoginView");
    }
    return res.json()
  }).catch(err => console.log(err));
}

export async function deletar(endpoint) {
  let token = await AsyncStorage.getItem("token");
  return  await fetch(`${BASE_URL}/${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${token}`,
    },
  }).then(res => {
    if (res.status === 401) {
      router.push("/view/LoginView");
    }
    return res.json()
  }).catch(err => console.log(err));
}

export async function post(endpoint, body) {
  let token = await AsyncStorage.getItem("token");
  return await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${token}`
    },
    body: body
  }).then(res => {
    if (res.status === 401) {
      router.push("/view/LoginView");
    }
    return res.json()
  }).catch(err => console.log(err));
}

export async function login(email, senha) {
  return  await fetch(`${BASE_URL}/api/usuarios/logado`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${btoa(`${email}:${senha}`)}`
    },
  }).then(res => {
    if (res.status !== 401) {
      AsyncStorage.setItem("token", btoa(`${email}:${senha}`));
      return "/";
    }

    return "/view/LoginView";
  }).catch(err => console.log(err));
}