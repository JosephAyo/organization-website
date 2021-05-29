const paragraphs_1 = [
  " We are a big family with more than 1,200 members and we believe that each member has his/her importance in how well the family is fairing.",
  " We are a big family with more than 1,200 members and we believe that each member has his importance is fairing.",
  " We are a big family with more than 6,200 people and we believe that each member has his importance is fairing.",
  " We are a big  that each member has his importance is fairing.",
];
const paragraphs_2 = [
  "From our master brewer to our handy man, from the salesman to the Chief Executive Officer, from our truck driver to our laboratory technician, every single person counts.",
  "Driver to our laboratory technician, every single person counts",
  " From our master brewer to our handy man, from the salesman to the Chief Executive Officer, from our truck driver to our laboratory technician",
  " We are a big even Chief Executive Officer, from our truck driver to our laboratory technician, every single person counts.",
];

// Add active_tab class to the current button (highlight it)
let tab_options = document.getElementsByClassName("tab_name_text");
let active_dots = document.getElementsByClassName("active_dot");
let paragraph_1_element = document.getElementsByClassName("tab_content_paragraph_1");
let paragraph_2_element = document.getElementsByClassName("tab_content_paragraph_2");

let tab_nav_arrows = document.getElementsByClassName("tab_nav_arrow");
let currentTabPosition = 0;

[].forEach.call(tab_options, function (tab_option, index) {
  tab_option.addEventListener("click", function () {
    let current = document.getElementsByClassName("active_tab");
    current[0].className = current[0].className.replace(" active_tab", "");

    let currentDotted = document.getElementsByClassName("active_tracked");
    currentDotted[0].className = currentDotted[0].className.replace(" active_tracked", "");

    active_dots[index].className += " active_tracked";
    this.className += " active_tab";

    paragraph_1_element[0].innerText = paragraphs_1[index];
    paragraph_2_element[0].innerText = paragraphs_2[index];

    currentTabPosition = index;
  });
});

[].forEach.call(tab_nav_arrows, function (tab_nav_arrow, index) {
  tab_nav_arrow.addEventListener("click", function () {
    if (index == 0 && currentTabPosition < 3) {
      currentTabPosition += 1;
    } else if (index == 1 && currentTabPosition > 0) {
      currentTabPosition -= 1;
    }
    let current = document.getElementsByClassName("active_tab");
    current[0].className = current[0].className.replace(" active_tab", "");

    let currentDotted = document.getElementsByClassName("active_tracked");
    currentDotted[0].className = currentDotted[0].className.replace(" active_tracked", "");

    active_dots[currentTabPosition].className += " active_tracked";
    tab_options[currentTabPosition].className += " active_tab";

    paragraph_1_element[0].innerText = paragraphs_1[currentTabPosition];
    paragraph_2_element[0].innerText = paragraphs_2[currentTabPosition];
  });
});
