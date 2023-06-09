import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ComponetListImage, ComponetPageTitulo, ComponetPanelTitulo } from "../../components";
import { IPage } from "../../../App";

export function Pagina2({setPageI, pageNumber}:IPage) {
    const img1 = require("../../assets/img1.png")
    const img2 = require("../../assets/img2.png")
    const pagina2Texto = [
        {id: '1', text: 'Circuito de Saída de Encoders', img: img1 },
        {id: '2', text: 'Circuito de Memória RAM', img: img2 },
    ]
    return (
        <View style={styles.container}>
            <ComponetPageTitulo setPageI={setPageI} pageNumber={pageNumber}/>
            <View style={styles.panel}>
                <FlatList
                    data={pagina2Texto}
                    renderItem={({ item }) =>
                        <ComponetListImage key={item.id} text={item.text} img={item.img}/>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}