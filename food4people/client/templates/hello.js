Template.hello.events(
{


'submit form': function(event)
{
  event.preventDefault();

  Meteor.call('sendMessage',event.target.msg.value,event.target.phonenum.value,function(error,result) {
    if(error) {
      // handle error
    } else {
      // examine result
    }
  
  });


}









});
