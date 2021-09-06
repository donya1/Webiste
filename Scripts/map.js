  $(document).ready(function(){
    $('.biblioExpand').click(function() {
      $('.bibliography').toggle("slide");
      $(this).find('i').toggleClass('.fa fa-caret-square-o-up')
    });
  });


  $('.backgroundLaws').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutLaws").offset().top 
  }, 500);
});

    $('.offenseTypeDescriptions').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutOffenses").offset().top 
  }, 500);
});

//   function openTab(mapTab) {
//   var i;
//   var x = document.getElementsByClassName("tab");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   document.getElementById(mapTab).style.display = "block";
// }


// $(function(){
//     $("#mapOne").load("mapOne.html"); 
// }); 

// $(function(){
//     $("#mapTwo").load("mapTwo.html"); 
// }); 

// $(function(){
//     $("#mapThree").load("mapThree.html"); 
// });

// $(function(){
//     $("#indexTable").load("indexTable.html"); 
// }); 

 $(document).ready(function(){
    $('.menuFilter').click(function() {
      $('#menu').toggle("slide");
    });
  });

 $(document).ready(function(){
    $('.mobileLegend').click(function() {
      $('#legend').toggle("slide");
    });
  }); 