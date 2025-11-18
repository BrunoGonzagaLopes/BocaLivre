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
    body: JSON.stringify(body)
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

export async function cadastro(nome, email, senha, cpf, telefone) {
  return  await fetch(`${BASE_URL}/usuarios/public`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nome: nome, cpf: cpf, email: email, senha: senha, telefone: telefone})
  }).then(res => {
    if (res.status === 409) {
      alert("Dados Inválidos");
    }

    if (res.status === 422) {
      return res.json().dados;
    }

    console.log("cadastrada: " + btoa(`${email}:${senha}`));
    AsyncStorage.setItem("token", btoa(`${email}:${senha}`));
    return "/";
  }).catch(err => console.log(err));
}