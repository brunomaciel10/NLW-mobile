import { ActivityIndicator } from "react-native"; // importa o componente de loading
import { s } from "./styles"; // importa os estilos desse componente
import { colors } from "@/styles/theme"; // importa as cores

export function Loading() {
    return <ActivityIndicator color = {colors.green.base} style = {s.container}/>
} 