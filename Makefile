strip_xml_comments:
	find . -type f -print0 | xargs -0 sed -i 's/ \/\/<co id="".*$//g'
