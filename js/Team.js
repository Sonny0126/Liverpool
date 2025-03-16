// 로고 클릭 시 index.html로 이동
document.getElementById("new_logo").addEventListener("click", () => {
  window.location.href = "../index.html";
});  

// 선수 데이터 JSON
let playersData = {
  "FW": [
    { name: "다윈 누녜스", age: '25', height: "188cm", weight: "78kg", value: "€ 65.0M", contract: "Jun 2028", img: "../person_image/Nunez.png" },
    { name: "코디 각포", age: '25', height: "189cm", weight: "76kg", value: "€ 60.0M", contract: "Jun 2028", img: "../person_image/Gakpo.png" },
    { name: "모하메드 살라", age: '32', height: "175cm", weight: "71kg", value: "€ 55.0M", contract: "Jun 2025", img: "../person_image/Salah.png" },
    { name: "디오고 조타", age: '28', height: "178cm", weight: "73kg", value: "€ 50.0M", contract: "Jun 2027", img: "../person_image/Jota.png" },
    { name: "페데리코 키에사", age: '27', height: "175cm", weight: "70kg", value: "€ 22.0M", contract: "Jun 2028", img: "../person_image/Kiesa.png" }
  ],
  "MF": [
    { name: "알렉시스 맥 알리스터", age: '26', height: "176cm", weight: "70kg", value: "€ 80.0M", contract: "Jun 2028", img: "../person_image/Mac.png" },
    { name: "도미닉 소보슬라이", age: '24', height: "186cm", weight: "74kg", value: "€ 75.0M", contract: "Jun 2028", img: "../person_image/Szobo.png" },
    { name: "라이언 그라벤베르흐", age: '22', height: "190cm", weight: "75kg", value: "€ 55.0M", contract: "Jun 2028", img: "../person_image/Graven.png" },
    { name: "커티스 존스", age: '24', height: "185cm", weight: "81kg", value: "€ 45.0M", contract: "Jun 2027", img: "../person_image/Curtis.png" },
    { name: "하비 엘리엇", age: '21', height: "170cm", weight: "65kg", value: "€ 35.0M", contract: "Jun 2027", img: "../person_image/Elliot.png" },
    { name: "엔도 와타루", age: '32', height: "178cm", weight: "76kg", value: "€ 12.0M", contract: "Jun 2027", img: "../person_image/Endo.png" }
  ],
  "DF": [
      { name: "트렌트 알렉산더-아놀드", age: '26', height: "175cm", weight: "70kg", value: "€ 75.0M", contract: "Jun 2025", img: "../person_image/Trent.png" },
      { name: "이브라히마 코나테", age: '25', height: "193cm", weight: "84kg", value: "€ 50.0M", contract: "Jun 2026", img: "../person_image/Konate.png" },
      { name: "앤드류 로버트슨", age: '31', height: "178cm", weight: "64kg", value: "€ 25.0M", contract: "Jun 2026", img: "../person_image/Robertson.png" },
      { name: "자렐 콴사", age: '22', height: "197cm", weight: "80kg", value: "€ 22.0M", contract: "Jun 2029", img: "../person_image/Quansah.png" },
      { name: "코너 브래들리", age: '21', height: "181cm", weight: "74kg", value: "€ 20.0M", contract: "Jun 2027", img: "../person_image/Bradley.png" },
      { name: "치미카스, 코스타스", age: '28', height: "178cm", weight: "77kg", value: "€ 20.0M", contract: "Jun 2027", img: "../person_image/Tsimikas.png" }
  ],
  "GK": [
      { name: "알리송", age: '32', height: "191cm", weight: "91kg", value: "€ 25.0M", contract: "Jun 2027", img: "../person_image/Alisson.png" },
      { name: "케빈 켈레허", age: '26', height: "188cm", weight: "80kg", value: "€ 22.0M", contract: "Jun 2026", img: "../person_image/Kelleher.png" },
      { name: "비테슬라프 야로스", age: '23', height: "190cm", weight: "85kg", value: "€ 5.0M", contract: "Jun 2025", img: "../person_image/Jaros.png" }
  ]
};

// 선수 목록 동적 로드
function loadPlayers() {
  let playersSection = document.getElementById("players-section");
  playersSection.innerHTML = ""; // 기존 데이터 초기화

  for (let position in playersData) {
      let table = `
          <h2>${position === "FW" ? "공격수" : position === "MF" ? "미드필더" : position === "DF" ? "수비수" : "골키퍼"}</h2>
          <table class="player-table">
              <thead>
                  <tr>
                      <th>선수</th>
                      <th>나이</th>
                      <th>높이</th>
                      <th>몸무게</th>
                      <th>시장 가치</th>
                      <th>계약 만료</th>
                  </tr>
              </thead>
              <tbody>
      `;

      playersData[position].forEach(player => {
          table += `
              <tr>
                  <td><img src="${player.img}" alt="${player.name}" class="player-img"> ${player.name}</td>
                  <td>${player.age}</td>
                  <td>${player.height}</td>
                  <td>${player.weight}</td>
                  <td>${player.value}</td>
                  <td>${player.contract}</td>
              </tr>
          `;
      });

      table += `</tbody></table>`;
      playersSection.innerHTML += table;
  }
}

// 페이지 로드 시 실행
loadPlayers();

// 환율 변환 함수
function convertCurrency() {
  let pound = document.getElementById("poundInput").value;
  let exchangeRate = 1881; // 현재 1 파운드 = 약 1881원
  let result = (pound * exchangeRate).toLocaleString() + " 원";
  document.getElementById("result").innerText = `환전된 금액: ${result}`;
}