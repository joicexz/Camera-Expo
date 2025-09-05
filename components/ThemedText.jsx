//O componenete ThemedText é uma extensão do componente de texto do React Native
//Adicionando suporte a temas de cores e estilos de tipografia predefinidos

import { StyleSheet, Text } from 'react-native';

//O useThgmeColor é um hook personalizado que provavelmente determina a cor com base no tema do sistema (claro/escuro)
import { useThemeColor } from '@/hooks/useThemeColor';

//Define o componente ThemedText
//Ele aceita várias props, incluindo estilo, cores para temas claros/escuros e um 'type' para estilos predefinidos
export function ThemedText({
    style, //Estilo extra, qu pode subescrever os estilos padrão
    lightColor, //Cor para o tema claro
    darkColor, //Cor para o tema escuro
    type = 'default', //Tipo de estilo de texto, com 'default' como padrão
    ...rest //Coleta todas as outras props, com 'children' (o texto em si), e as respotas para o componenete <Text>
}) {
    //Usa o hook para obter a cor do texto com base nas cores passadas e no tema atual
    //Se lightColor e darkColor não foram fornecidos, ele usa a cor padrão 'text'
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
        //Combina todos os estilos em um array. A ordem é importante para a sobreposição de estilos:
        //1 - A cor dinâmica do tema
        //2 - O estilo predefinido (ex: 'title', 'link') baseado no prop 'type'
        //3 - O estilo extra passado pela prop 'style', que tem a maior prioridade
        style={[
            {color},
            type === 'default' ? StyleSheet.default : undefined,
            type === 'title' ? StyleSheet.title : undefined,
            type === 'defaultSemiBold' ? StyleSheet.defaultSemiBold : undefined,
            type === 'subtitle' ? StyleSheet.subtitle : undefined,
            type === 'link' ? StyleSheet.link : undefined,
            style,
        ]}
        //Repassa as demais props para o componente Text nativo

        >
        </Text>
    )
}