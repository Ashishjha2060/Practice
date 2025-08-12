 const questions = [
      { q: "Capital of India?", o: ["Mumbai", "Delhi", "Lucknow", "Banhglore"], a: "Delhi" },
      { q: "Capital of US?", o: ["Los Angles", "Miami", "DC", "Ohio"], a: "DC" },
      { q: "Capital of France?", o: ["Berlin", "Paris", "London", "Rome"], a: "Paris" }
    ];

    let i = 0, score = 0, t;

    function show() {
      let q = questions[i];
      document.getElementById("question").innerText = q.q;
      let opt = document.getElementById("options");
      opt.innerHTML = "";
      q.o.forEach(x => {
        let b = document.createElement("button");
        b.innerText = x;
        b.className = "option";
        b.onclick = () => select(b, q.a);
        opt.appendChild(b);
      });
      start();
    }

    function select(btn, ans) {
      clearInterval(t);
      [...document.getElementsByClassName("option")].forEach(b => b.disabled = true);
      if (btn.innerText === ans) {
        btn.style.background = "green";
        score++;
      } else {
        btn.style.background = "red";
      }
    }

    function nextQuestion() {
      if (++i < questions.length) show();
      else {
        document.querySelector(".quiz-box").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = `Score: ${score}/${questions.length}`;
      }
    }

    function start() {
      let time = 10;
      document.getElementById("timer").innerText = `Time: ${time}`;
      t = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = `Time: ${time}`;
        if (time === 0) {
          clearInterval(t);
          [...document.getElementsByClassName("option")].forEach(b => b.disabled = true);
        }
      }, 1000);
    }

    show();