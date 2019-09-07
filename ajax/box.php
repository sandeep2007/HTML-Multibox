<?php
//print_r($_POST);
echo $box = '<div class="box">
[BOX '.$_POST['box'].']
<button style="display:none" class="remove-box" onclick="obj0.deleteBox($(this).parent())">REMOVE BOX</button>
<button class="add-box" onclick="obj0.getBox()">ADD BOX</button>
<div class="data-row">
[BOX '.$_POST['box'].', ROW '.$_POST['row'].']
<button onclick="obj0.getRow(this,$(this).parent().parent())" class="add-row">ADD ROW</button>
<button class="remove-row" style="display:none" onclick="obj0.deleteRow($(this).parent())">REMOVE</button>
</div>
<br/>
</div>';

?>
