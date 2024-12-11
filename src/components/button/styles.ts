import { StyleSheet } from "react-native"; // importa o componente de estilo
import { colors, fontFamily } from "@/styles/theme"; // importa as cores

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14
    },
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize: 16
    }
})