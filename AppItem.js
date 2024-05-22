import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AppItem(props) {
    return (
        <View style={style.container}>
            <Text style={styles.textItems}>
            {props.item}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                 style={styles.deleteButton}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.editButton}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
