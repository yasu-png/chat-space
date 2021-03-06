$(function(){ 
    function buildHTML(message){
     if ( message.image ) {
       var html =
        `<div class="main-space__center-center__boxes" data-message-id=${message.id}>
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
        `<div class="main-space__center-center__boxes" data-message-id=${message.id}>
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
      var html = buildHTML(data);
      $('.main-space__center-center').append(html);
      $('.main-space__center-center').animate({ scrollTop: $('.main-space__center-center')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    return false;
});
  var reloadMessages = function() {
    var last_message_id = $('.main-space__center-center__boxes:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main-space__center-center').append(insertHTML);
        $('.main-space__center-center').animate({ scrollTop: $('.main-space__center-center')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});