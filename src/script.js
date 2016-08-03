document.body.innerHTML = document.body.innerHTML.replace(new RegExp(/<tr class="spacer"(?:(?!<tr)[\s\S])+<tr(?:(?!<tr)[\s\S])+<a href="from\?site=(techcrunch\.com|nytimes\.com|arstechnica\.com|wired\.com|bbc\.co\.uk|wsj\.com|businessinsider\.com|forbes\.com|cnn\.com|venturebeat\.com|mashable\.com|theverge\.com|thenextweb\.com|cnet\.com|washingtonpost\.com|theatlantic\.com|readwriteweb\.com|gigaom\.com	|theguardian\.com|economist\.com|reuters\.com|bloomberg\.com|yahoo\.com|guardian\.co\.uk|zdnet\.com|engadget\.com|slate\.com|technologyreview\.com|theregister\.co\.uk|posterous\.com|bbc\.com|gizmodo\.com|npr\.org|businessweek\.com|itworld\.com|fastcompany\.com|huffingtonpost\.com|telegraph\.co\.uk|networkworld\.com)">.+?<tr[\s\S]+?<\/tr>/, "g"), "");

/*
Noise list generate with data from https://bigquery.cloud.google.com/dataset/bigquery-public-data:hacker_news per november 2015

All domains with more than 2500 stories with more than 60% of stories having 3 or less votes 

Sites with usergenerated content was manually filtered out. 

//SQL: 
SELECT 
	REGEXP_EXTRACT((REGEXP_EXTRACT(stories.url,'http://([^/]+)/')),'([^\\.]+\\.[^\\.]+(?:\\.[a-zA-Z].)?)$') AS stories_url_domain,
	COUNT(stories.id) AS stories_count,
  COUNT(CASE WHEN stories.score <= 3 THEN 1 ELSE NULL END) AS storiescountscore_3_minus,
	COUNT(CASE WHEN stories.score <= 3 THEN 1 ELSE NULL END) / COUNT(stories.id) *100 AS stories_percent_3_minus,
FROM [fh-bigquery:hackernews.stories]
 AS stories

WHERE 
	REGEXP_EXTRACT((REGEXP_EXTRACT(stories.url,'http://([^/]+)/')),'([^\\.]+\\.[^\\.]+(?:\\.[a-zA-Z].)?)$') 
  NOT IN (  // Sites with usergenerated content
            'blogspot.com',
            'youtube.com',
            'wordpress.com',
            'tumblr.com',
            'google.com',
            'wikipedia.org',
            'github.com',
            'bit.ly',
            'typepad.com',
            'reddit.com',
            'stackoverflow.com',
            'quora.com',
            'youtu.be',
            'stackexchange.com'
         )
GROUP EACH BY 1
HAVING 
      COUNT(stories.id) > 2500
      AND stories_percent_3_minus > 60
ORDER BY 4 aSC
LIMIT 500


Result: 
techcrunch.com
nytimes.com
arstechnica.com
wired.com
bbc.co.uk
wsj.com
businessinsider.com
forbes.com
cnn.com
venturebeat.com
mashable.com
theverge.com
thenextweb.com
cnet.com
washingtonpost.com
theatlantic.com
readwriteweb.com
gigaom.com	
theguardian.com
economist.com
reuters.com
bloomberg.com
yahoo.com
guardian.co.uk
zdnet.com
engadget.com
slate.com
technologyreview.com
theregister.co.uk
posterous.com
bbc.com
gizmodo.com
npr.org
businessweek.com
itworld.com
fastcompany.com
huffingtonpost.com
telegraph.co.uk
networkworld.com

*/