export const calculateRating = (rating: number) => {
  if (rating > 8) {
    return 'Çok Beğenildi'
  } else if (rating > 6) {
    return 'Beğenildi'
  } else if (rating > 4) {
    return 'Beğenilmedi'
  } else {
    return 'Hiç beğenilmedi'
  }
}