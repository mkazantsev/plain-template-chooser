var $prevRow = null;

$(document).ready(function() {
	$(".mark").each(function() {
		var value = $(this).get(0).innerHTML;
		if (value == "✓") {
			$(this).css("color", "green");
		} else {
			$(this).css("color", "red");
		}
    });

	$("table tr").hover(function() {
		if ($prevRow) {
			$prevRow.find("td").css("background-color", "white");
		}
		$prevRow = $(this);
		$(this).find("td").css("background-color", "lightgrey");
	});
});
