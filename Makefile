strip_xml_comments:
	@find -E listings/ -type f -regex '.*\.(js|txt|txt2|html)' -exec sed -i '' -e 's/ \/\/<co id="".*//g' {} +
