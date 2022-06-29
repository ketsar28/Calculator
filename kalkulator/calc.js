// const angka1 = parseFloat(prompt("masukan angka pertama"));
// const tanyaSim = prompt("kali, bagi, kurang, tambah");
// const angka2 = parseFloat(prompt("masukan angka kedua"));
// let hasil = "";

// // +
// if (tanyaSim == "kali") {
//   hasil = angka1 * angka2;
//   alert(hasil);
//   console.log(`${angka1} x ${angka2} = ${hasil}`);
// } else if (tanyaSim == "bagi") {
//   hasil = angka1 / angka2;
//   alert(hasil);
//   console.log(`${angka1} : ${angka2} = ${hasil}`);
// } else if (tanyaSim == "kurang") {
//   hasil = angka1 - angka2;
//   alert(hasil);
//   console.log(`${angka1} - ${angka2} = ${hasil}`);
// } else if (tanyaSim == "tambah") {
//   hasil = angka1 + angka2;
//   alert(hasil);
//   console.log(`${angka1} + ${angka2} = ${hasil}`);
// } else {
//   alert("mohon perhatikan kembali inputan anda!");
//   alert("silahkan refresh kembali browser anda untuk mencoba kembali!");
// }

// =========

// script 2

let getBtn = [...document.querySelectorAll(".btn")];

let result = document.querySelector(".result");

getBtn.map((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     console.log(e.target.innerText);
  //   });

  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "CE":
        result.innerText = "";
        break;
      case "←":
        if (result.innerText) {
          result.innerText = result.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = "Error!.";
          alert("Try Again");
        }
        break;
      default:
        result.innerText += e.target.innerText;
    }
  });
});
