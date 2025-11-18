export const dataMaisProxima = (info1, info2) => {
    let dados1 = info1.split("/");
    let dados2 = info2.split("/");

    let data1 = new Date(dados1[2], dados1[1], dados1[0])
    let data2 = new Date(dados2[2], dados2[1], dados2[0])

    return (data1 > data2) ? info2 : info1;
}