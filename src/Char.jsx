import { useState } from "react";
const charList = [
  {
    wujudAseli: "DomaMonsterUngu",
    nama: "Doma",
    monster: true,
    gambar:
      "https://img.freepik.com/free-vector/happy-hairy-purple-alien-monster-cartoon-character_1308-157326.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user",
    dialog: [
      {
        success: 1,
        penampilan:
          "Kamu adalah seorang monster jahat dengan nama Monsta yang menyamar menjadi seseorang bernama Doma. Doma memiliki wujud monster mata 2 dengan taring yang banyak. Tetapi dia berwarna hijau dan memiliki tanduk sementara kamu tidak. Seseorang bertanya kenapa kamu memiliki warna ungu dan tidak memiliki tanduk. Kamu sedikit panik, tapi Kamu harus meyakinkan orang tersebut bahwa engkau bukanlah Monsta melainkan seseorang bernama Doma!",
        bicara:
          "Kamu adalah seorang monster jahat dengan nama Monsta yang menyamar menjadi seseorang bernama Doma. Doma memiliki wujud monster mata 2 dengan taring yang banyak. Tetapi dia berwarna hijau dan memiliki tanduk sementara kamu tidak. Seseorang bertanya kenapa gaya bicaramu terlihat panik. Kamu sedikit panik, tapi Kamu harus meyakinkan orang tersebut bahwa engkau bukanlah Monsta melainkan seseorang bernama Doma!",
      },
      {
        success: 2,
        response:
          "YAHAHAHA KAU BERHASIL KALAH, SAATNYA AKU MENYELESAIKAN INI SEMUA",
      },
      {
        success: 0,
        response: "SIAL, AKU GAGAL",
      },
    ],
  },
  {
    wujudAseli: "DomaAsli",
    nama: "Doma",
    monster: false,
    gambar:
      "https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-monster-character-clip-art-png-image_11528822.png",
    dialog: [
      {
        success: 1,
        penampilan: "Apa maksudmu? bukankah penampilanku biasa saja ya?",
        bicara:
          "ada apa? kamu mencurigaiku ya? haha kamu memang pintar ngejokes",
      },
      {
        success: 2,
        response: "terima kasih banyak",
      },
      {
        success: 0,
        response:
          "KENAPA KAMU TIDAK MEMERCAYAI KU? OH TIDAK MONSTER MONSTER ITU BERDATANGAN TOLON-",
      },
    ],
  },
];

function Char() {
  let indexChar = Math.floor(Math.random() * charList.length);
  const [char, changeChar] = useState(charList[indexChar]);
  charList.splice(indexChar, 0);
  console.log(charList);
  const [dialog, changeDialog] = useState("");
  const mati = () => {
    return "YAHAHHAHAH KALAH";
  };
  const request = () => {
    return "hello world";
  };
  const tindak = (response, isMonster, accept) => {
    changeDialog(response);
    if (accept) {
      if (isMonster) {
        mati();
      } else {
        indexChar = Math.floor(Math.random() * charList.length);
        changeChar(charList[indexChar]);
        charList.splice(indexChar, 1);
      }
    }
  };
  return (
    <>
      <div className="boxChar">
        <img src={char.gambar} />
        <h3>{char.nama}</h3>
        <button id="penampilan" onClick={request(char.dialog[0].penampilan)}>
          Ada apa dengan penampilanmu?
        </button>
        <button id="bicara" onClick={request(char.dialog[0].bicara)}>
          Ada apa dengan cara bicaramu?
        </button>
        <button
          id="accept"
          onClick={tindak(char.dialog[1].response, char.monster, true)}
        >
          Kamu tampak aman
        </button>
        <button
          id="reject"
          onClick={tindak(char.dialog[2].response, char.monster, false)}
        >
          Kamu tampak mencurigakan
        </button>
      </div>
      <div className="boxDialog">{dialog}</div>
    </>
  );
}

export default Char;
