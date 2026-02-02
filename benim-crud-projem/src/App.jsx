import { useState,useEffect, use } from "react";
import axios from 'axios';
// function App() {
//   const [liste,setListe] =useState (["Elma" ,"Armut","Muz"]);
//   const [yeniMeyve,setYeniMeyve] = useState ("");
//   const meyveEkle = () => {
//     if(yeniMeyve.trim() !==""){
//       setListe([...liste,yeniMeyve]);
//       setYeniMeyve("");
//     }
//     const meyveSil = (index) => {
//       const yeniListe = liste.filter((_,i) => i !== index);
//       setListe(yeniListe);
//     }

//   };
//   return (
//     <div style={{padding:"20px"}}>
//       <h1>Meyve Listesi</h1>
//       <input 
//       type="text"
//       placeholder="Meyve adını gir"
//       value={yeniMeyve}// kutunun değeri değişkenden gelir
//       onChange={(e) => setYeniMeyve(e.target.value)} // input değiştiğinde yeniMeyve değişkenini günceller
//       />
//       <button onClick={meyveEkle}>Ekle</button>
//       <ul>
//         {liste.map((meyve,index) => (
//           <li key={index}>{meyve}</li>
//         ))}
//         <button onClick={() => meyveSil(index)}>Sil</button>
//       </ul>
//     </div>
//   );
// }

// export default App;
function App() {
  const [liste, setListe] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').
    then((cevap)=>{
      setListe(cevap.data);
    }).catch((hata)=>{
      console.error("Veri çekme hatası:", hata);
    });
  }, []);
  return (
    <div style={{"padding": "20px"}}>
    <h1>Gönderi Listesi</h1>
    <ul>
      {liste.map((gonderi) => (
        <li key={gonderi.id}>
          <strong>{gonderi.title}</strong>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default App;