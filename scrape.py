from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}

url = 'https://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html'

class ScrapeTool():

    def __init__(self,url):
        self.url = url

        headers = headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}
        req = Request(url=url,headers=headers)
        page = urlopen(req)

        self.soup = BeautifulSoup(page,'html.parser')
    

    def recipeScrape(self):
        content = self.soup.find_all('p')
        article = ""

        for i in content:
            article = article + " " + i.text
        
        return article

    
