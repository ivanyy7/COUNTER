import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleReset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Счётчик</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Сброс</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: '#e5e7eb',
    marginBottom: 16,
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    minWidth: 100,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#f9fafb',
    fontSize: 18,
    fontWeight: '600',
  },
});