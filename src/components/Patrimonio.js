import { doc, deleteDoc } from 'firebase/firestore'
import React from 'react'
import {View, Text, StyleSheet, Platform, Alert} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { database } from '../../config/firebase'
import themes from '../themes'
import { useNavigation } from '@react-navigation/native'

export default function Patrimonio({...patrimonio}){
    const navigation = useNavigation();

    const onDelete = () => {
        if (Platform.OS == 'web'){
            Alert.alert("sifude", "suporta web n")
        }
        else {
            Alert.alert("Confirmar Exclusão?", "Confirmar a exclusão do patrimonio\nA operação não podera ser desfeita",
            [
                {text: "Não", style:"cancel"},
                {text: "Sim", onPress: () => {
                    const docRef = doc(database, "patrimonio", patrimonio.id);
                    deleteDoc(docRef);
                }},
            ])
        }
    }

    const onEdit = () => {
        if (Platform.OS == 'web'){
            Alert.alert("sifude", "suporta web n")
        }
        else {
            navigation.navigate("editPatrimonio", patrimonio)
        }
    }

    return (
        <View style={styles.patrimonioContainer}>   
            <View style={{flexDirection: "column", justifyContent: "flex-start", flexWrap: 'wrap', alignItems: "flex-start"}}>
                    <Text style={styles.nome}>{patrimonio.codigo}</Text>
                    <Text style={styles.nome}>{patrimonio.nome}</Text>
                    <Text style={{...styles.nome, fontWeight: "normal"}}>{patrimonio.local}</Text>
                    <Text style={{...styles.nome, fontWeight: "normal"}}>{patrimonio.categoria}</Text>
                    <Text style={{...styles.nome, fontWeight: "normal"}}>{patrimonio.estado}</Text>
            </View>
            <View style={{flexDirection: "row"}} >
                <MaterialCommunityIcons name="circle-edit-outline" onPress={onEdit} size={32} color={themes.colors.utility.success} />
                <MaterialCommunityIcons name="trash-can" onPress={onDelete} size={32} color={themes.colors.utility.danger} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    patrimonioContainer: {
        padding: 8,
        backgroundColor: themes.colors.brand.roxoEscuro,
        margin: 16,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nome: {
        fontSize: 24,
        marginRight: 8,
        fontWeight: 'bold',
    }

})