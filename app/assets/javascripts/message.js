$(function(){ 
    function buildHTML(message){
     if ( message.image ) {
       var html =
        `<div class="main-space__center-center__boxes">
           <div class="main-space__center-center__boxes__some">
             <div class="main-space__center-center__boxes__some__name">
               ${message.user_name}
             </div>
             <div class="main-space__center-center__boxes__some__date">
               ${message.created_at}
             </div>
           </div>
           <div class="main-space__center-center__boxes__list">
             <p class="lower-message__content">
               ${message.content}
             </p>
           </div>
           <img src=${message.image} >
         </div>`
       return html;
     } else {
       var html =
        `<div class="main-space__center-center__boxes">
           <div class="main-space__center-center__boxes__some">
             <div class="main-space__center-center__boxes__some__name">
               ${message.user_name}
             </div>
             <div class="main-space__center-center__boxes__some__date">
               ${message.created_at}
             </div>
           </div>
           <div class="main-space__center-center__boxes__list">
             <p class="lower-message__content">
               ${message.content}
             </p>
           </div>
         </div>`
       return html;
     };
   }
$('#new_message').on('submit', function(e){
   e.preventDefault();
   var formData = new FormData(this);
   var url = $(this).attr('action')
   $.ajax({
     url: url,
     type: "POST",
     data: formData,
     dataType: 'json',
     processData: false,
     contentType: false
   })
    .done(function(data){
      console.log(data)
      var html = buildHTML(data);
      $('.main-space__center-center').append(html);
      $('.main-space__center-center').animate({ scrollTop: $('.main-space__center-center')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    return false;
})
});