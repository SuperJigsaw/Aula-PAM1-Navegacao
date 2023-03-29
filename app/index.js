import { StyleSheet, Text, View } from "react-native";
import styles from '../style'
import {Link} from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>André</Text>
        <Text style={styles.subtitle}>Formulário</Text>
        <Link href={'cadastro'} style={styles.subtitle}>CADASTRO</Link>
      </View>
    </View>
  );
}

