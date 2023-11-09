type DateInfo = "day" | "month" | "year" | "full"

export default function getCurrentDateInfo(info: DateInfo) {
  const currentDate = new Date()

  switch (info) {
    case "day":
      return currentDate.getDate()
    case "month":
      // Months are zero-based (0 = January, 1 = February, etc.)
      return currentDate.getMonth() + 1 // Adding 1 to get the actual month number
    case "year":
      return currentDate.getFullYear()
    case "full":
      return currentDate.toLocaleDateString()
    default:
      return "Invalid parameter"
  }
}
