// 이슈 데이터
const issues = [
  {
    date: "4/10",
    title:
      "Regendary players Mohamed Salah resigns new contract with Liverpool FC",
    details: [
      {
        image: "../image/Salah_Resigning.jpg",
        text: `Salah: “It’s great, I had my best years here. I played eight years, hopefully it’s going to be 10. Enjoying my life here, enjoying my football. I had the best years in my career.

                I would like to say to [the fans], I am very, very happy to be here. I signed here because I believe we can win a lot of big trophies together. Keep supporting us and we’ll give it our best, and hopefully in the future we’re going to win more trophies.”`,
      },
    ],
  },
  {
    date: "4/17",
    title:
      "Regendary players Virgil Van Dijk resigns new contract with Liverpool FC",
    details: [
      {
        image: "../image/Virgil_Resigning.jpg",
        text: `Virgil: “I’m very happy, very proud,” Van Dijk told Liverpoolfc.com in exclusive reaction. “There are so many emotions obviously that go through my head right now speaking about it.

                It’s a proud feeling, it’s a feeling of joy. It’s just incredible. The journey I’ve had so far in my career, to be able to extend it with another two years at this club is amazing and I’m so happy.”

                It was always Liverpool. That was the case. It was always in my head, it was always the plan and it was always Liverpool.

                There wasn’t any doubt in my head that this is the place to be for me and my family. I’m one of Liverpool. Someone called me the other day an adopted Scouser – I’m really proud to hear these things, it gives me a great feeling.”`,
      },
    ],
  },
  {
    title:
      "New Signing: Liverpool agree signing of Jeremie Frimpong from Bayer Leverkusen Joins Liverpool",
    details: [
      {
        image: "../image/frimpong_signing.jpg",
        text: `Jeremy frimpong: "It went quite easy. Liverpool came and said they had interest, and obviously for me it was a no-brainer."

                “For me, it was like, ‘Whatever you guys do, just get this done’, my agents: ‘Just get this done.’

                “Liverpool fans, I’m going to give my all, my energy, my work-rate and hopefully we can win together, we celebrate together, get everything together.

                “I’m just excited to be here. Thank you guys for accepting me and I won’t let you guys down and I’ll give you the energy that you guys want.”`,
      },
    ],
  },
  {
    date: "6/20",
    title:
      "New Signing: Liverpool agree signing of Florian Wirtz from Bayer Leverkusen",
    details: [
      {
        image: "../image/Wirtz_Resigning.png",
        text: `Wirtz: “I feel very happy and very proud. Finally it’s done and I was waiting for a long time – finally it’s done and I am really happy.

        “I'm really excited to have a new adventure in front of me. This was also a big point of my thoughts: that I want to have something completely new, to go out of the Bundesliga and to join the Premier League.

        “I will see how I can perform there. I hope I can do my best. I spoke also with some players who played there and they told me that it’s perfect for me and every pitch is perfect, you can enjoy every game. I’m really looking forward to playing my first game.”`,
      },
    ],
  },
  {
    date: "6/26",
    title:
      "New Signing: Liverpool complete signing of Milos Kerkez from Bournemouth",
    details: [
      {
        image: "../image/Kerkez_Resigning.png",
        text: `Wirtz: “"I'm really happy.

        “I'm really excited to have a new adventure in front of me. This was also a big point of my thoughts: that I want to have something completely new, to go out of the Bundesliga and to join the Premier League.

        "I just want to thank everyone for really showing me big love, even before it will be announced now.

        "And keep supporting the team like you support always, because you're the biggest fan base in the world.

        "I'm going to give everything – absolutely everything – to win trophies with the club and to hopefully score some goals at Anfield. I can't wait to hear the roar. And see you soon."`,
      },
    ],
  },
];

// 요소 가져오기
document.addEventListener("DOMContentLoaded", () => {
  const issueList = document.getElementById("issue-list");
  const toggleBtn = document.getElementById("toggle-issues-btn");

  // 전체 리스트 토글
  toggleBtn.addEventListener("click", () => {
    issueList.style.display =
      issueList.style.display === "none" ? "block" : "none";
  });

  // 이슈 항목 동적 생성
  issues.forEach((issue, index) => {
    const li = document.createElement("li");

    const titleBtn = document.createElement("button");
    titleBtn.textContent = issue.title;
    titleBtn.classList.add("issue-title");
    titleBtn.setAttribute("data-index", index);

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("issue-detail");
    detailDiv.style.display = "none";

    issue.details.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = "issue image";
      img.style.maxWidth = "100%";

      const p = document.createElement("p");
      p.textContent = item.text;

      detailDiv.appendChild(img);
      detailDiv.appendChild(p);
    });

    titleBtn.addEventListener("click", () => {
      detailDiv.style.display =
        detailDiv.style.display === "none" ? "block" : "none";
    });

    li.appendChild(titleBtn);
    li.appendChild(detailDiv);
    issueList.appendChild(li);
  });
});
