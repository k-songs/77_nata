import { View, Text } from "react-native";

function Mytext({title}: {title: string}) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}                
export default Mytext;