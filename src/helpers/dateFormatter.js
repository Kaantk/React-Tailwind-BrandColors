export default function DateFormatter(modifiedDate) {
  // Tarihi JavaScript Date nesnesine çevirme
  const date = new Date(modifiedDate);

  // Tarih bileşenlerini al
  const year = date.getFullYear().toString().slice(-2); // Yılın son iki rakamını alır
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ayı alır (0 ile başladığı için +1 eklenir), iki haneli hale getirir
  const day = date.getDate().toString().padStart(2, "0"); // Günü alır, iki haneli hale getirir

  // Sonuç tarihini oluştur
  return `${month}/${day}/${year}`;
}
