let aaa: string = '111';
console.log(aaa);

$(() => {
  console.log('123')
  new $.fn.init();
})


$(() => {
  $('body').html('<div>12hah34</div>')
})

$(function() {
  $('body').html('<div>12hah34</div>')
})