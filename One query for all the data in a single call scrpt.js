query {
  customer(id: "123") {
    name
    orders {
      id
      status
      shipment {
        trackingNumber
      }
    }
  }
}
