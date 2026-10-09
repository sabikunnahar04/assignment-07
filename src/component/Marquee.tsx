// import React from 'react';
// import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";

// interface Head {
//     id: string;
//     nameBn: string;
//     categoryIcon: string;
//     today: string;
// }

// const Marquee = async () => {

//     const res = await fetch(
//         "https://api.abcz.workers.dev/api/bazardor/products"
//     );

//     const data: Head[] = await res.json();

//     const products = data.slice(0, 10);

//     return (
//         <div className="border-b border-gray-200 bg-white">

//             <div className="max-w-7xl mx-auto">

//                 <MarqueeText
//                     direction="right"
//                     duration={10}
//                 >

//                     <div className="flex items-center gap-8 py-2">

//                         {products.map((p) => (

//                             <span
//                                 key={p.id}
//                                 className="whitespace-nowrap text-[11px] text-gray-700"
//                             >

//                                 <span className="mr-1">
//                                     {p.categoryIcon}
//                                 </span>

//                                 {p.nameBn}

//                                 <span className="font-semibold ml-1">
//                                     {p.today} টাকা/কেজি
//                                 </span>

//                             </span>

//                         ))}

//                     </div>

//                 </MarqueeText>

//             </div>

//         </div>
//     );
// };

// export default Marquee;