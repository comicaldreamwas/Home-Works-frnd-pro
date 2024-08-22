document.addEventListener('DOMContentLoaded', () => {
   const emojis = document.querySelectorAll('.emoji');
   const showResultsButton = document.getElementById('show-results');
   const clearResultsButton = document.getElementById('clear-results');
   const resultContainer = document.getElementById('result-container');

   
   function loadVotes() {
       emojis.forEach(emoji => {
           const emojiData = emoji.dataset.emoji;
           const count = localStorage.getItem(emojiData) || 0;
           emoji.querySelector('.emoji-count').textContent = count;
       });
   }

  
   function saveVote(emoji) {
       const emojiData = emoji.dataset.emoji;
       let count = parseInt(localStorage.getItem(emojiData) || 0, 10);
       count++;
       localStorage.setItem(emojiData, count);
       emoji.querySelector('.emoji-count').textContent = count;
   }

  
   emojis.forEach(emoji => {
       const voteButton = emoji.querySelector('.vote-button');
       voteButton.addEventListener('click', () => saveVote(emoji));
   });

  
   showResultsButton.addEventListener('click', () => {
       const votes = [];
       emojis.forEach(emoji => {
           const emojiData = emoji.dataset.emoji;
           const count = parseInt(localStorage.getItem(emojiData) || 0, 10);
           votes.push({ emoji: emojiData, count });
       });

       const winner = votes.reduce((prev, current) => (prev.count > current.count) ? prev : current);
       resultContainer.textContent = `Winner: ${winner.emoji} with ${winner.count} votes`;
   });

   
   clearResultsButton.addEventListener('click', () => {
       localStorage.clear();
       resultContainer.textContent = '';
       loadVotes();
   });

   loadVotes(); 
});
