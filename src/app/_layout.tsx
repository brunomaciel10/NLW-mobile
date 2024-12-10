import { Stack } from "expo-router" // importa o tipo da navegação do app
import { colors } from "@/styles/theme" // importa o arquivo de temas
import { 
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik" // importa as fontes

import { Loading } from "@/components/loading" // importa o componente de loading

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold 
    }) // utiliza as fontes

    if(!fontsLoaded) {
        return <Loading />
    } // verifica se a fonte foi carregada, se não, aguarda ela carregar

    return <Stack 
    screenOptions={{ 
        headerShown: false, // remove o cabeçalho
        contentStyle: { backgroundColor: colors.gray[100] } // define a cor de fundo de todo o projeto
    }}
    /> 
}