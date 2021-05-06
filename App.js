import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.left}>
          <img src={require('./assets/logo.png')}/>
        </View>
        <View style={styles.right}>
          <View style={styles.shell}>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text>
              <Text style={styles.number}>1</Text>
              <Text style={styles.title}>Qui suis-je?</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.brac}>{"{"}</Text>
            </Text>
            <Text>
              <Text style={styles.number}>2</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.red}>prénom</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>Tom</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>3</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.red}>nom</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>Debout</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>4</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.red}>téléphone</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.link}>06.46.39.02.26</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>5</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.red}>email</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.link}>debouttom@icloud.com</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>6</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.red}>localisation</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>33 rue Salomon Reinach, 69007 Lyon France</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>7</Text>
              <Text style={styles.brac}>{"}"}</Text>
            </Text>
            <Text>
              <Text style={styles.number}>8</Text>
            </Text>
            <Text>
              <Text style={styles.number}>9</Text>
              <Text style={styles.title}>Présentation</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.brac}>{"{"}</Text>
            </Text>
            <Text>
              <Text style={styles.number}>10</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.reppre}>Actuellement en première annéee à EPITECH, je m'intéresse </Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>11</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.reppre}>aux nouvelles technologies plus particulièrement passionnées par</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>12</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.reppre}>l'intelligence artificielle et le développement front-end</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>13</Text>
              <Text style={styles.brac}>{"}"}</Text>
            </Text>
            <Text>
              <Text style={styles.number}>14</Text>
            </Text>
            <Text>
              <Text style={styles.number}>15</Text>
              <Text style={styles.title}>Experiance</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.brac}>{"{"}</Text>
            </Text>
            <Text>
              <Text style={styles.number}>16</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.date}>2021 - 20??</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>Développeur de l'application mobile pour Delivr'aide</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>17</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.date}>2020 - 20??</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>Ambassadeur EPITECH</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>18</Text>
              <Text style={styles.point}>{"••"}</Text>
              <Text style={styles.date}>2017 - 2020</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>Réparation de téléphone chez Tech in Phone</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>19</Text>
              <Text style={styles.brac}>{"}"}</Text>
            </Text>
            <Text>
              <Text style={styles.number}>20</Text>
            </Text>
            <Text>
              <Text style={styles.number}>21</Text>
              <Text style={styles.title}>Skills</Text>
              <Text style={styles.dpoint}>:</Text>
              <Text style={styles.brac}>{"["}</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>HTML</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>CSS</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>JS</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>REACT</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>PYTHON</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>C</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.coma}>,</Text>
              <Text style={styles.quote}>"</Text>
              <Text style={styles.rep}>...</Text>
              <Text style={styles.quotes}>"</Text>
              <Text style={styles.brac}>{"]"}</Text>
              <Text style={styles.coma}>,</Text>
            </Text>
            <Text>
              <Text style={styles.number}>21</Text>
            </Text>
            <Text>
              <Text style={styles.number}>22</Text>
            </Text>
            <Text>
              <Text style={styles.number}>23</Text>
            </Text>
            <Text>
              <Text style={styles.number}>24</Text>
            </Text>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredient: {
    backgroundColor: '#fff',
  },
  left: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    backgroundColor: '#2E225C',
    height: '100%',
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  shell: {
    flex: 1,
    backgroundColor: '#36286c',
    marginTop: '2.3%',
    marginBottom: '2.3%',
    height: '95%',
    width: '97.5%',
  },
  number: {
    fontSize: '125%',
    marginLeft: '5%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#6E6396',
  },
  brac: {
    marginLeft: "2%",
    fontSize: '125%',
    color: '#8f81c2',
  },
  point: {
    marginLeft: "2%",
    fontSize: '125%',
    color: '#6E6396',
  },
  red: {
    marginLeft: "0.5%",
    fontSize: '125%',
    color: '#f13e54',
  },
  dpoint: {
    marginLeft: "0.1%",
    fontSize: '125%',
    color: '#8f81c2',
  },
  rep: {
    marginLeft: "0.5%",
    fontSize: '125%',
    color: '#40dd5a',
  },
  reppre: {
    marginLeft: "1%",
    fontSize: '125%',
    color: '#40dd5a',
  },
  coma: {
    marginLeft: "0.5%",
    fontSize: '125%',
    color: '#8f81c2',
  },
  link: {
    marginLeft: "1%",
    fontSize: '125%',
    color: '#2cdceb',
  },
  quote: {
    marginLeft: "2%",
    fontSize: '125%',
    color: '#8f81c2',
  },
  quotes: {
    marginLeft: "0.5%",
    fontSize: '125%',
    color: '#8f81c2',
  },
  title: {
    marginLeft: "2%",
    fontSize: '125%',
    color: '#FF0000',
  },
  pres: {
    marginLeft: "0,5%",
    fontSize: '125%',
    color: '#40dd5a',
  },
  date: {
    marginLeft: "1%",
    fontSize: '125%',
    color: '#fa9765',
  },
  wgit: {
    marginLeft: "5%",
    width: "10%",
    height: "10%",
  },
});
