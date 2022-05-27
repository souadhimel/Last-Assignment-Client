// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// const useProducts = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/service")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong!",
//           footer: "Please, try again",
//         });
//       });
//   }, []);
//   return products;
// };

// export default useProducts;