import { StatusBar } from "expo-status-bar"
import { useCallback, useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

const items = [
  {
    id: 1,
    name: "NAAN",
  },
  {
    id: 2,
    name: "BURGERS",
  },
  {
    id: 3,
    name: "FRIED CHICKEN",
  },
  {
    id: 4,
    name: "MENU DUOS",
  },
  {
    id: 5,
    name: "TANDEMS",
  },
  {
    id: 6,
    name: "WRAPS",
  },
]
export default function App() {
  const OrderItem = ({ name, style }) => {
    return (
      <View
        style={[
          {
            justifyContent: "center",
            width: 150,
            height: 250,
            backgroundColor: "#ddd",
            alignItems: "center",
            marginHorizontal: 10,
          },
          style,
        ]}
      >
        <Text>{name}</Text>
      </View>
    )
  }
  const [itemSize, setItemSize] = useState(240)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSnapInterval, setCurrentSnapInterval] = useState(240)

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <FlatList
        //  snapToAlignment="center"
        snapToInterval={170}
        decelerationRate={50}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={items}
        contentContainerStyle={{ left: 50 }}
        renderItem={({ item, i }) => <OrderItem name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        // onViewableItemsChanged={_onViewableItemsChanged}
        //onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
