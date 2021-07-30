
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));

// Implement a listener for speech segment updates
document
  .getElementsByTagName("push-to-talk-button")[0]
  .addEventListener("speechsegment", (e) => {
    const segment = e.detail;
    document.getElementById("searchBox").value = segment.words.filter(w => w.value).map(w => w.value.toLowerCase()).join(" ");
  });