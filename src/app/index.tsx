import { View, Text } from "react-native"
import { Welcome } from "@/components/welcome"; // importa o componente de welcome
import { Steps } from "@/components/steps"; // importa o componente de steps

export default function Index() {
    return (
        <View style = {{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />
            <Steps />
        </View>
    )
}