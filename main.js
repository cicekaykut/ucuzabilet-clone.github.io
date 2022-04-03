  $(function () {
      minDate = new Date();
      $("#datepickerStart").datepicker({
          showAnim: 'drop',
          numberOfMonths: 2,
          numberOfMonth: 1,
          dateFormat: "dd MM, y",
          monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
          dayNamesMin: ["Pa", "Pt", "Sl", "Ça", "Pe", "Cu", "Ct"],
          dayNames: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
          onClose: function (selectedDate) {
              $('#return').datepicker("option", "minDate", selectedDate);
          }
      });
  });

  $(function () {
      minDate = new Date();
      $("#datepickerFinish").datepicker({
          showAnim: 'drop',
          numberOfMonths: 2,
          numberOfMonth: 1,
          dateFormat: "dd MM, y",
          monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
          dayNamesMin: ["Pa", "Pt", "Sl", "Ça", "Pe", "Cu", "Ct"],
          dayNames: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
          onClose: function (selectedDate) {
              $('#return').datepicker("option", "minDate", selectedDate);
          }
      });
  });



  var modalBtn = document.getElementById("modalBtn");
  var modalOpen = document.getElementById("modalOpen");
  var modalClose = document.getElementById("modalClose");
  modalBtn.addEventListener("click", openModal);

  function openModal() {
      modalOpen.style.display = "block";
  };
  modalClose.addEventListener("click", closeModal);

  function closeModal() {
      modalOpen.style.display = "none";
  };



  $(document).ready(function () {
      $('#gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
              enabled: true,
          }
      });
  });




  var roomDetailBtn = document.getElementById("roomDetailBtn");
  var roomDetailInfo = document.getElementById("roomDetailInfo");
  roomDetailBtn.addEventListener("click", roomDetail)

  function roomDetail() {
      roomDetailInfo.classList.toggle('show');
  };


  var generalDetailBtn = document.getElementById("generalDetailBtn");
  var generalDetailInfo = document.getElementById("generalDetailInfo");
  generalDetailBtn.addEventListener("click", generalDetail)

  function generalDetail() {
      generalDetailInfo.classList.toggle('show');
  };


  var areaDetailBtn = document.getElementById("areaDetailBtn");
  var areaDetailInfo = document.getElementById("areaDetailInfo");
  areaDetailBtn.addEventListener("click", areaDetail)

  function areaDetail() {
      areaDetailInfo.classList.toggle('show');
  };


  var allDetailBtn = document.getElementById("allDetailBtn");
  var allDetailInfo = document.getElementById("allDetailInfo");
  allDetailBtn.addEventListener("click", allDetail)

  function allDetail() {
      allDetailInfo.classList.toggle('show');
  };


  var commentDetailBtn = document.getElementById("commentDetailBtn");
  var commentDetailInfo = document.getElementById("commentDetailInfo");
  commentDetailBtn.addEventListener("click", commentDetail)

  function commentDetail() {
      commentDetailInfo.classList.toggle('show');
  };




  var toogleBtnOne = document.getElementById("toogleBtnOne");
  var cardOne = document.getElementById("cardOne");
  toogleBtnOne.addEventListener("click", openToogle)

  function openToogle() {
      cardOne.classList.toggle('none');
  };



  var toogleBtnTwo = document.getElementById("toogleBtnTwo");
  var cardTwo = document.getElementById("cardTwo");
  toogleBtnTwo.addEventListener("click", openToogle2)

  function openToogle2() {
      cardTwo.classList.toggle('none');
  };



  var toogleBtnThree = document.getElementById("toogleBtnThree");
  var cardThree = document.getElementById("cardThree");
  toogleBtnThree.addEventListener("click", openToogle3)

  function openToogle3() {
      cardThree.classList.toggle('none');
  };



  var toogleBtnFour = document.getElementById("toogleBtnFour");
  var cardFour = document.getElementById("cardFour");
  toogleBtnFour.addEventListener("click", openToogle4)

  function openToogle4() {
      cardFour.classList.toggle('none');
  };