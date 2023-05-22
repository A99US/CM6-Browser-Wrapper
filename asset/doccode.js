window.testdoccode =
`<?php
echo 'test code !!!';
$data = "Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper";
function calc($var) {
  return $var * 10 ;
}
?>
<form>
  This is a link : https://t.co
  This is a link Too : https://github.com
  <textarea rows="130" cols="25" id='data'></textarea>
  <input type="button" name="savedata" value="Save Data">
</form>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
/* eslint-env jquery */
// ==================================================================
// ===================== SAVING DATA INTO TXT FILE ==================
$('#savedata').click(function(){
  var element = document.createElement('a'),
      testlinewrap = 'Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper Test LineWrapper ',
      data = $('#data').val();
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(data)
  );
  element.setAttribute('download', 'data.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
});
</script>
<style type="text/css">
body {
  margin: 2px;
  padding: 0;
  background: #fff;
  color: #444;
  font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
}
</style>`;

window.testdoccode2 =
`<?php
echo 'test code !!!';
function calc($var) {
  return $var * 10 ;
}
?>
<form>
  <textarea rows="130" cols="25" id='data'></textarea>
  <input type="button" name="savedata" value="Save Data">
</form>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
function savetxt(){
  var element = document.createElement('a'),
      data = $('#data').val();
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(data)
  );
});
</script>
<style type="text/css">
body {
  margin: 2px;
  padding: 0;
  background: #fff;
  color: #444;
  font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
}
</style>`;

// export default testdoccode