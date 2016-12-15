awk {'print $2'} uv.txt | sort | uniq | wc -l
