$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });
});
$.fn.scrollView = function() {
  return this.each(function() {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top
      },
      1000
    );
  });
};
$("#js-btn").click(function(event) {
  event.preventDefault();
  $("#js-section").scrollView();
});
$("#js-btn-2").click(function(event) {
  event.preventDefault();
  $("#js-section-2").scrollView();
});
$("#js-btn-3").click(function(event) {
  event.preventDefault();
  $("#js-section-3").scrollView();
});
$("#js-btn-4").click(function(event) {
  event.preventDefault();
  $("#js-section-4").scrollView();
});
//
document.addEventListener("DOMContentLoaded", function() {
  renderContent();

  document.getElementById("my-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var titleInput = document.querySelector("#title");
    setTitle(titleInput.value);
    renderContent();
    var nameInput = document.querySelector("#name");
    setName(nameInput.value);
    renderContent();
    var dateInput = document.querySelector("#date");
    setDate(dateInput.value);
    renderContent();
    var content = document.querySelector("#field5");
    setContent(content.value);
    renderContent();
  });
});

function setTitle(title) {
  localStorage.setItem("titleInput", title);
}
function setName(name) {
  localStorage.setItem("nameInput", name);
}
function setDate(date) {
  localStorage.setItem("dateInput", date);
}
function setContent(content) {
  localStorage.setItem("content", content);
}
function setTopic(topic) {
  localStorage.setItem("", content);
}

function renderContent() {
  //html containers
  var holdTitle = document.querySelector(".holdTitle");
  var holdName = document.querySelector(".holdName");
  var holdDate = document.querySelector(".holdDate");
  var holdContent = document.querySelector(".holdContent");

  //html input
  var titleInput = document.querySelector("#title");
  var nameInput = document.querySelector("#name");
  var dateInput = document.querySelector("#date");
  var content = document.querySelector("#field5");

  //localstorage stuff
  var newTitle = localStorage.getItem("titleInput");
  var newName = localStorage.getItem("nameInput");
  var newDate = localStorage.getItem("dateInput");
  var newContent = localStorage.getItem("content");
  //setting innerHTML
  holdTitle.innerHTML = newTitle;
  holdName.innerHTML = newName;
  holdDate.innerHTML = newDate;
  holdContent.innerHTML = newContent;
}
