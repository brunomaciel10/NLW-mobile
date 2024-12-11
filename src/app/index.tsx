import { View } from "react-native"
import { router } from "expo-router"; // é utilizado para a navegação
import { Welcome } from "@/components/welcome"; // importa o componente de welcome
import { Steps } from "@/components/steps"; // importa o componente de steps
import { Button } from "@/components/button"; // importa o componente do button

export default function Index() {
    return (
        <View style = {{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />
            <Steps />

            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}