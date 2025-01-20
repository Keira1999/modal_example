import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Pressable, Platform } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.showModalText}>Show modal message</Text>
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  showModalText: {
    fontSize: 18,
    color: 'black'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center'
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16
  },
});
