import { StyleSheet } from "react-native"; // importa o componente de estilo
import { colors } from "@/styles/theme"; // importa as cores

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100]    
    }
}) // cria os estilos para determinado componente