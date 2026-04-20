// const products = [
//   {
//     img: "images/phone.jpg",
//     title: "Smartphone With High-Speed Processor and Great Camera",
//     rating: "4.3 | 12,345 ratings",
//     oldPrice: 199990,
//     newPrice: 137999
//   },
//   {
//     img: "images/laptop.jpg",
//     title: "HP 15 Laptop, Intel (14th Gen) Core 5 120U (24GB DDR5, 512GB SSD)",
//     rating: "4.5 | 9,120 ratings",
//     oldPrice: 55999,
//     newPrice: 49799
//   },
//   {
//     img: "images/headphones.jpg",
//     title: "Sony WH-CH720N Active Noise Cancellation Wireless Headphones",
//     rating: "4.6 | 22,540 ratings",
//     oldPrice: 9999,
//     newPrice: 7799
//   },
//   {
//     img: "images/tv.jpg",
//     title: "Philips 108 cm (43 inches) 6100 Series Smart TV",
//     rating: "4.6 | 20,745 ratings",
//     oldPrice: 23899,
//     newPrice: 19999
//   },
//   {
//     img: "images/camera.jpg",
//     title: "Fujifilm X-T5 40MP APS-C X-Trans High Resolution Mirrorless Camera",
//     rating: "4.7 | 8,245 ratings",
//     oldPrice: 180999,
//     newPrice: 169999
//   },
//   {
//     img: "images/speaker.jpg",
//     title: "Zebronics Zeb-Warrior 2.0 Multimedia Speaker",
//     rating: "4.2 | 5,120 ratings",
//     oldPrice: 1999,
//     newPrice: 1599
//   },
//   {
//     img: "images/washingmachine.jpg",
//     title: "LG Smart Choice Fully-Automatic Front Load Washing Machine",
//     rating: "4.5 | 18,600 ratings",
//     oldPrice: 30999,
//     newPrice: 27499
//   },
//   {
//     img: "images/ac.jpg",
//     title: "Blue Star 1 Ton 5 Star Smart Inverter Split AC",
//     rating: "4.4 | 10,980 ratings",
//     oldPrice: 41999,
//     newPrice: 37999
//   },
//   {
//     img: "images/refridge.jpg",
//     title: "Haier 596L 3Star Side by Side Frost Free Refrigerator",
//     rating: "4.3 | 7,890 ratings",
//     oldPrice: 49999,
//     newPrice: 45890
//   },
//   {
//     img: "images/oven.jpg",
//     title: "Pigeon Oven Toaster Grill 14 Liters OTG | 900 Watts",
//     rating: "4.1 | 3,540 ratings",
//     oldPrice: 1899,
//     newPrice: 1699
//   }
// ];
// const container = document.getElementById("products");
// products.forEach(p => {
//   const discount = Math.round(((p.oldPrice - p.newPrice) / p.oldPrice) * 100);
//   const save = p.oldPrice - p.newPrice;

//   container.innerHTML += `
//     <div class="product-card">
//       <div class="img-box">
//         <img src="${p.img}">
//         <span class="discount">${discount}% OFF</span>
//       </div>

//       <p class="title">${p.title}</p>

//       <p class="rating">⭐ ${p.rating}</p>

//       <p>
//         <del>₹${p.oldPrice.toLocaleString()}</del>
//         <span class="final">₹${p.newPrice.toLocaleString()}</span>
//       </p>

//       <p class="save">You save ₹${save.toLocaleString()}</p>

//       <button class="buy">Buy Now</button>
//       <button class="cart">Add to Cart</button>
//     </div>
//   `;
// });