import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { validarEmail, validarCPF, validarSenha, validarNome } from "../services/validationCadastroService";
import { cadastro } from "../services/httpService";

export default function CadastroScreen() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleCadastro() {
        cadastro(nome, email, senha, cpf, "5531998579244");
    }

    return (
        <View style={styles.container}>
    
            <Image
                source={require("../assets/images/icons/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Cadastro</Text>

            <TextInput placeholder="Nome Completo" style={styles.input} value={nome} onChangeText={setNome} />
            <TextInput placeholder="CPF" style={styles.input} value={cpf} onChangeText={setCpf} />
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />

            <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
            />

            <TextInput
                placeholder="Confirmar Senha"
                secureTextEntry
                style={styles.input}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />

            {/* CRITÉRIOS DA SENHA NA TELA */}
            <View style={styles.passwordRules}>
                <Text style={styles.rulesTitle}>Sua senha deve conter no mínimo:</Text>
                <Text style={styles.ruleItem}>• Pelo menos 8 caracteres</Text>
                <Text style={styles.ruleItem}>• 1 letra maiúscula</Text>
                <Text style={styles.ruleItem}>• 1 letra minúscula</Text>
                <Text style={styles.ruleItem}>• 1 caractere especial</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3EFEA",
        paddingHorizontal: 24,
    },
    logo: {
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
        fontSize: 16,
    },
    passwordRules: {
        width: "100%",
        marginBottom: 20,
    },
    rulesTitle: {
        fontWeight: "bold",
        marginBottom: 6,
    },
    ruleItem: {
        fontSize: 14,
        marginLeft: 6,
    },
    button: {
        width: "100%",
        backgroundColor: "#000",
        padding: 16,
        borderRadius: 12,
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});
