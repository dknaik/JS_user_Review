const reviews = [
  {
    id: 1,
    name: "Elon Musk",
    job: "web developer",
    img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/GettyImages-688402807_header-1024x575.jpg?w=1155&h=1528",
    text: " is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    name: "Mahesh",
    job: "UI/UX Designer",
    img: "https://media.gettyimages.com/photos/young-man-working-at-home-in-the-evening-picture-id1181035364?s=612x612",
    text: " is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    name: "Mangesh",
    job: "Javascript specialist",
    img: "https://static3.bigstockphoto.com/1/1/3/large1500/311566528.jpg",
    text: " is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    name: "Mithun",
    job: "Backend PHP Developer",
    img: "https://ak.picdn.net/shutterstock/videos/5660423/thumb/1.jpg",
    text: " is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const imgpad = document.getElementById("imgpad");
const textinfo = document.getElementById("textinfo");
const name = document.getElementById("name");
const job = document.getElementById("job");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const random_btn = document.getElementById("random_btn");

//setting starting item
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  show(currentItem);
});

function show(people) {
  let item = reviews[people];

  imgpad.src = item.img;
  textinfo.textContent = item.text;
  name.textContent = item.name;
  job.textContent = item.job;
}

next.addEventListener("click", function () {
  currentItem++;
  console.log(currentItem);
  if (currentItem > reviews.length - 1) currentItem = 0;

  show(currentItem);
});
previous.addEventListener("click", function () {
  currentItem--;
  console.log(currentItem);
  if (currentItem < 0) currentItem = reviews.length - 1;

  show(currentItem);
});

random_btn.addEventListener("click", function () {
  let val = Math.floor(Math.random() * reviews.length);
  console.log(val);
  show(val);
});
