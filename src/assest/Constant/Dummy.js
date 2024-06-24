{<View
            style={{
              backgroundColor: 'white',
              height: 40,
              width: '80%',
              borderRadius: 20,
              left: 10,
              top: 5,
              justifyContent: 'center',
            }}
          >
            <Text style={{ marginHorizontal: 10 }}>Search</Text>
          </View>

<Filter setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
<Timewisefood/>
          <FlatList
            horizontal
            style={{ padding: 3 }}
            data={filterfood}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <LinearGradient colors={['#F4C430', '#228B22']} style={{ height: 40, borderRadius: 20, margin: 10, alignItems: 'center', width: 100 }}>
                <TouchableOpacity
                  onPress={() => handleslect(item)}
                  key={index}
                  style={{
                    margin: 4,
                    height: 30,
                    paddingVertical: 5,
                    borderRadius: 18,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'white' }}>{item[1].restaurant}</Text>
                </TouchableOpacity>
              </LinearGradient>
            )}
          />

          <FlatList
            data={selectHotel}
            renderItem={(item, inde) => {
              const foodOrder = item?.item

              return (
                <View style={{ justifyContent: "center", alignItems: "center", width: '50%' }}>
                  <TouchableOpacity
                    key={inde}
                    onPress={() => handleOrder(foodOrder)} // Call handleOrder when the button is pressed
                    style={{
                      width: "90%",
                      backgroundColor: 'white',
                      borderRadius: 10,
                      justifyContent: "center",
                      elevation: 99,
                      paddingVertical: 10,
                      paddingHorizontal: 5,
                      borderColor: "#4DAABD",
                      borderWidth: 1,
                      alignItems: 'center'
                    }}>
                    <View style={{ height: 60, width: 60, borderRadius: 15, borderColor: 'blue', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text>Image</Text>
                    </View>
                    <Text style={{ color: '#2F3067' }}>{foodOrder.foodName}</Text>
                    <Text style={{ color: '#2F3067' }}> Rs:{foodOrder.price}/-</Text>
                    <TouchableOpacity style={{ backgroundColor: "green", borderRadius: 30, width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: 'white' }}>Order Now</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              )
            }}
            contentContainerStyle={{
              padding: 10,
              justifyContent: 'center',
              gap: 20,
            }}
            numColumns={numColumns}
            key={numColumns.toString()}
          />}