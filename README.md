# No Noise Hacker News

Do you ever wish you could filter [Hacker News](https://news.ycombinator.com/) to avoid the noise? 

This is the source of [the chrome extension No Noise Hacker News](https://chrome.google.com/webstore/detail/no-noise-hacker-news/meeppdmpplgpkpgdlnhfagmplkmkjhnm/) that filteres away stories from domains that - per november 2015 - had more than than 2500 submitted stories but less than 40% had more than 3 votes. See [`src/script.js`](https://github.com/mathiasrw/no-noise-nacker-news/blob/master/src/script.js) for more details on how the domains where found.

## Todo
* Let the top bar icon get color when stories have been filtered
* Clicking on the top bar icon gives you the option to reload the page with no stories filtered
* Let people add and remove blacklisted domains by them self

_PR very welcome_


## But?

#### Is this censoring? 
- No, this is a way of limiting domains with a high amount of noise. 

#### Will it hide a really interesting storry?
- Yes, but any story that is number 1 will never be filtered (so if its really good, you will still see it)

#### How can I see in anything is being filtered?
The sequense of numbers at the left side will skip the ordner of natural numbers.

#### I really want to see what is being filtered?
Open the page in incognito mode to avoid filtering anything. 

#### Can I alter the list of domains beinf filtered?
- Not right now, but that is where I want to go with this plugin. PRs are very welcome.

#### What is being filtered 
At the moment the following domains are filtered:
- techcrunch.com
- nytimes.com
- arstechnica.com
- wired.com
- bbc.co.uk
- wsj.com
- businessinsider.com
- forbes.com
- cnn.com
- venturebeat.com
- mashable.com
- theverge.com
- thenextweb.com
- cnet.com
- washingtonpost.com
- theatlantic.com
- readwriteweb.com
- gigaom.com	
- theguardian.com
- economist.com
- reuters.com
- bloomberg.com
- yahoo.com
- guardian.co.uk
- zdnet.com
- engadget.com
- slate.com
- technologyreview.com
- theregister.co.uk
- posterous.com
- bbc.com
- gizmodo.com
- npr.org
- businessweek.com
- itworld.com
- fastcompany.com
- huffingtonpost.com
- telegraph.co.uk
- networkworld.com

See [`src/script.js`](https://github.com/mathiasrw/no-noise-nacker-news/blob/master/src/script.js) for more details on how the domains where found.

