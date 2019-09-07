<?php
//print_r($_POST);
echo $row = '<div class="data-row">
[BOX '.$_POST['box'].', ROW '.$_POST['row'].']
<button onclick="obj0.getRow(this,$(this).parent().parent())" class="add-row">ADD ROW</button>
<button style="display:none" class="remove-row" onclick="obj0.deleteRow($(this).parent())">REMOVE</button>
</div>';

?>