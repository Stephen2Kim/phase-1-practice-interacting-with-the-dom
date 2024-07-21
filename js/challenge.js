let timer = 0;
let intervalId;
let isPaused = false;
const likes = {};

function startTimer() {
  intervalId = setInterval(() => {
    timer++;
    document.getElementById('counter').textContent = timer;
  }, 1000);
}

startTimer();

document.getElementById('plus').addEventListener('click', () => {
  timer++;
  document.getElementById('counter').textContent = timer;
});

document.getElementById('minus').addEventListener('click', () => {
  if (timer > 0) {
    timer--;
    document.getElementById('counter').textContent = timer;
  }
});

document.getElementById('heart').addEventListener('click', () => {
  if (likes[timer]) {
    likes[timer]++;
  } else {
    likes[timer] = 1;
  }
  
  const likesList = document.querySelector('.likes');
  likesList.innerHTML = ''; // Clear previous likes
  
  for (const [number, count] of Object.entries(likes)) {
    const li = document.createElement('li');
    li.textContent = `${number} has been liked ${count} time${count > 1 ? 's' : ''}`;
    likesList.appendChild(li);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  if (isPaused) {
    startTimer();
    document.getElementById('pause').textContent = 'pause';
    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('heart').disabled = false;
  } else {
    clearInterval(intervalId);
    document.getElementById('pause').textContent = 'resume';
    document.getElementById('plus').disabled = true;
    document.getElementById('minus').disabled = true;
    document.getElementById('heart').disabled = true;
  }
  
  isPaused = !isPaused;
});


document.getElementById('comment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value;
  commentInput.value = ''; // Clear the input
  
  const commentList = document.getElementById('list');
  const p = document.createElement('p');
  p.textContent = commentText;
  commentList.appendChild(p);
});
