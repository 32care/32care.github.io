$(document).ready(function (){
  get_latest_images();

  $( "#image-list" ).on( "click", ".remImage", function(e) {
    e.stopPropagation();
    var fileName = $(this).data('image');
    $.ajax({
      type: 'POST',
      url: CONTEXT_PATH + 'api/delete',
      data: {name: fileName,request: 2},
    }).done(function() {
      get_latest_images();
    });
  });
});

///lalit code
function get_latest_images(argument) {
  $.getJSON(CONTEXT_PATH + "api/file/list").done(function(resp){
    fileList(resp.files)
  }).fail(function(){
    setTimeout(get_latest_images,3*1000)
  }).always(function(){
    setTimeout(get_latest_images,300*1000)
  })
}
function fileList(files){
  var sliderList = ""
  for(var i=0;i<files.length; i++){
    sliderList += '<div class="test" id="test" style="background-image:url('+CONTEXT_PATH+"data/"+files[i]+')">'+
                      '<div class="remImage" data-image="'+files[i]+'">'+
                        '<img src="https://image.flaticon.com/icons/svg/261/261935.svg" style="width:40px;height:40px;">'+
                      '</div>'+  
                  '</div>'
  }
  $("#image-list").html(sliderList);
}