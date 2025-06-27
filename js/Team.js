// 선수 데이터 JSON (영어 이름)
let playersData = {
  FW: [
    {
      name: "Darwin Nunez",
      age: "25",
      position: "Forward",
      value: "€65M",
      img: "../person_image/Nunez.png",
    },
    {
      name: "Cody Gakpo",
      age: "25",
      position: "Forward",
      value: "€60M",
      img: "../person_image/Gakpo.png",
    },
    {
      name: "Mohamed Salah",
      age: "32",
      position: "Forward",
      value: "€55M",
      img: "../person_image/Salah.png",
    },
    {
      name: "Diogo Jota",
      age: "28",
      position: "Forward",
      value: "€50M",
      img: "../person_image/Jota.png",
    },
    {
      name: "Federico Chiesa",
      age: "27",
      position: "Forward",
      value: "€22M",
      img: "../person_image/Kiesa.png",
    },
  ],
  MF: [
    {
      name: "Alexis Mac Allister",
      age: "26",
      position: "Midfielder",
      value: "€80M",
      img: "../person_image/Mac.png",
    },
    {
      name: "Dominik Szoboszlai",
      age: "24",
      position: "Midfielder",
      value: "€75M",
      img: "../person_image/Szobo.png",
    },
    {
      name: "Ryan Gravenberch",
      age: "22",
      position: "Midfielder",
      value: "€55M",
      img: "../person_image/Graven.png",
    },
    {
      name: "Curtis Jones",
      age: "24",
      position: "Midfielder",
      value: "€45M",
      img: "../person_image/Curtis.png",
    },
    {
      name: "Harvey Elliott",
      age: "21",
      position: "Midfielder",
      value: "€35M",
      img: "../person_image/Elliot.png",
    },
    {
      name: "Wataru Endo",
      age: "32",
      position: "Midfielder",
      value: "€12M",
      img: "../person_image/Endo.png",
    },
  ],
  DF: [
    {
      name: "Trent Alexander-Arnold",
      age: "26",
      position: "Defender",
      value: "€75M",
      img: "../person_image/Trent.png",
    },
    {
      name: "Ibrahima Konate",
      age: "25",
      position: "Defender",
      value: "€50M",
      img: "../person_image/Konate.png",
    },
    {
      name: "Andrew Robertson",
      age: "31",
      position: "Defender",
      value: "€25M",
      img: "../person_image/Robertson.png",
    },
    {
      name: "Jarell Quansah",
      age: "22",
      position: "Defender",
      value: "€22M",
      img: "../person_image/Quansah.png",
    },
    {
      name: "Conor Bradley",
      age: "21",
      position: "Defender",
      value: "€20M",
      img: "../person_image/Bradley.png",
    },
    {
      name: "Kostas Tsimikas",
      age: "28",
      position: "Defender",
      value: "€20M",
      img: "../person_image/Tsimikas.png",
    },
  ],
  GK: [
    {
      name: "Alisson Becker",
      age: "32",
      position: "Goalkeeper",
      value: "€25M",
      img: "../person_image/Alisson.png",
    },
    {
      name: "Caoimhin Kelleher",
      age: "26",
      position: "Goalkeeper",
      value: "€22M",
      img: "../person_image/Kelleher.png",
    },
    {
      name: "Vitezslav Jaros",
      age: "23",
      position: "Goalkeeper",
      value: "€5M",
      img: "../person_image/Jaros.png",
    },
  ],
};

// 선수 목록 간단 테이블 출력
function loadPlayers() {
  let playersSection = document.getElementById("players-section");
  playersSection.innerHTML = ""; // 초기화

  for (let position in playersData) {
    let table = `
      <h2>${
        position === "FW"
          ? "Forwards"
          : position === "MF"
          ? "Midfielders"
          : position === "DF"
          ? "Defenders"
          : "Goalkeepers"
      }</h2>
      <table class="player-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Age</th>
            <th>Position</th>
            <th>Market Value</th>
          </tr>
        </thead>
        <tbody>
    `;

    playersData[position].forEach((player) => {
      table += `
        <tr>
          <td>
            <img src="${player.img}" alt="${player.name}" class="player-img">
            ${player.name}
          </td>
          <td>${player.age}</td>
          <td>${player.position}</td>
          <td>${player.value}</td>
        </tr>
      `;
    });

    table += `</tbody></table>`;
    playersSection.innerHTML += table;
  }
}

// 페이지 로드시 실행
loadPlayers();

// 환율 변환 함수
function convertCurrency() {
  let pound = document.getElementById("poundInput").value;
  let exchangeRate = 1881; // 예시 환율
  let result = (pound * exchangeRate).toLocaleString() + " KRW";
  document.getElementById("result").innerText = `Converted Amount: ${result}`;
}
